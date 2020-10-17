import React, { useEffect } from 'react';
import { View } from 'react-native';
import EmailList from '@components/EmailList';
import { useDispatch, useSelector } from 'react-redux';
import { getInbox } from '@features/HomeStack/redux/actions';
import Compose from '@components/Compose';

function Inbox({}) {
  const data = useSelector((state) => state.inbox);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Hello');
      dispatch(getInbox());
    }, 1000 * 5 * 3600);
    return () => {
      clearInterval(timer);
    };
  }, [dispatch]);

  return (
    <View>
      <EmailList navigateTo="Recieved Email" data={data} />
      <Compose />
    </View>
  );
}

export default Inbox;
