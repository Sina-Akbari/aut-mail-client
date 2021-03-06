import { Divider, Layout, List, Spinner, Text } from '@ui-kitten/components';
import { getEmailsAPI } from '@core/api/box';
import React, { Fragment, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import EmailItem from '../EmailItem';

export default ({ navigateTo, currentBox }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getEmails = async () => {
      const { success, error } = await getEmailsAPI(1, 100, currentBox);
      if (success) {
        setData(success.reverse());
        console.log('Success', success);
      } else {
        console.log(error);
      }
      setLoading(false);
      setLoading2(false);
    };
    getEmails();
  }, [count, currentBox]);

  return (
    <Fragment>
      {loading2 ? (
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
            setLoading(true);
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
