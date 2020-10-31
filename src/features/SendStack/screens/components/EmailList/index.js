import { Divider, Layout, List, Spinner, Text } from '@ui-kitten/components';
import EmailItem from '@components/EmailItem';
import React, { Fragment, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getSentBox } from '@features/SendStack/redux/actions';
import { startLoading } from '@core/redux/loading/actions';

export default ({ navigateTo, currentBox }) => {
  const data = useSelector((state) => state.sendBox);
  const loading = useSelector((state) => state.loading);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSentBox());
  }, [dispatch, count]);
  return (
    <Fragment>
      {loading ? (
        <Layout style={styles.container}>
          <Spinner size="giant" />
        </Layout>
      ) : data.length ? (
        <List
          data={data}
          windowSize={16}
          keyExtractor={({ id }) => `${id}`}
          renderItem={({ item: { from, subject, id, seen } }) => (
            <EmailItem
              id={id}
              from={from[0]}
              subject={subject}
              isSeen={seen}
              navigateTo={navigateTo}
              currentBox={currentBox}
            />
          )}
          onRefresh={() => {
            setCount(count + 1);
            dispatch(startLoading());
          }}
          refreshing={loading}
          ItemSeparatorComponent={() => <Divider style={styles.divider} />}
        />
      ) : (
        <Layout style={styles.container}>
          <Text>No Mails to Show!</Text>
        </Layout>
      )}
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    width: '60%',
    alignSelf: 'center',
    marginVertical: 2,
  },
});
