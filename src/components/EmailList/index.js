import { getInbox } from '@core/redux/Inbox/actions';
import React, { Fragment, useEffect } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import EmailItem from '../EmailItem';

export default ({ navigateTo }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.inbox);

  useEffect(() => {
    dispatch(getInbox());
  }, [dispatch]);

  return (
    <Fragment>
      <FlatList
        data={data}
        windowSize={8}
        keyExtractor={({ id }) => `${id}`}
        renderItem={({ item: { username, name } }) => (
          <EmailItem
            username={username}
            subject={name}
            navigateTo={navigateTo}
          />
        )}
      />
    </Fragment>
  );
};
