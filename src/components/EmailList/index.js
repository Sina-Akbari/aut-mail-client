import { Divider, Layout, List, Spinner, Text } from '@ui-kitten/components';
import React, { Fragment } from 'react';
import { StyleSheet } from 'react-native';
import EmailItem from '../EmailItem';

export default ({ navigateTo, data, loading }) => {
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
            />
          )}
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
