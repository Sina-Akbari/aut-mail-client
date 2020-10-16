import React, { useEffect } from 'react';
import { View } from 'react-native';
import EmailList from '@components/EmailList';
import { useDispatch, useSelector } from 'react-redux';
import { getSentBox } from '../../redux/actions';
import Compose from '@components/Compose';

function Inbox({}) {
  const data = useSelector((state) => state.sendBox);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSentBox());
  }, [dispatch]);

  return (
    <View>
      <EmailList navigateTo="Sent Email" data={data} />
      <Compose />
    </View>
  );
}

export default Inbox;
