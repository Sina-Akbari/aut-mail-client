import React, { useEffect } from 'react';
import { View } from 'react-native';
import EmailList from '@components/EmailList';
import { useDispatch, useSelector } from 'react-redux';
import { getSentBox } from '../../redux/actions';

function Inbox({}) {
  const data = useSelector((state) => state.sendBox);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSentBox());
  }, [dispatch]);

  return (
    <View>
      <EmailList navigateTo="Sent Email" data={data} />
    </View>
  );
}

export default Inbox;
