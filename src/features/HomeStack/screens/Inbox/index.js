import React, { useEffect } from 'react';
import { View } from 'react-native';
import EmailList from '@components/EmailList';
import { useDispatch, useSelector } from 'react-redux';
import { getInbox } from '@features/HomeStack/redux/actions';

function Inbox({}) {
  const data = useSelector((state) => state.inbox);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInbox());
  }, [dispatch]);

  return (
    <View>
      <EmailList navigateTo="Recieved Email" data={data} />
    </View>
  );
}

export default Inbox;
