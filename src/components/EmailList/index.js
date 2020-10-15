import React, { Fragment } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import EmailItem from '../EmailItem';

export default ({ navigateTo, data }) => {
  return (
    <Fragment>
      <FlatList
        data={data}
        windowSize={16}
        keyExtractor={({ id }) => `${id}`}
        renderItem={({ item: { from, subject, id } }) => (
          <EmailItem
            id={id}
            from={from[0]}
            subject={subject}
            navigateTo={navigateTo}
          />
        )}
      />
    </Fragment>
  );
};
