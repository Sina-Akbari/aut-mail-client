import { Divider, Spinner } from '@ui-kitten/components';
import React, { Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import EmailItem from '../EmailItem';

export default ({ navigateTo, data, loading }) => {
  return (
    <Fragment>
      {loading ? (
        <View style={styles.container}>
          <Spinner size="giant" />
        </View>
      ) : data.length ? (
        <FlatList
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
        <View style={styles.container}>
          <Text>No Mails to Show!</Text>
        </View>
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
