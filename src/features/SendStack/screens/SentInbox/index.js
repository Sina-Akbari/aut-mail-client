import React from 'react';
import { View } from 'react-native';
import EmailList from '../components/EmailList';
import Compose from '@components/Compose';

function SendInbox({ route: { name } }) {
  return (
    <View>
      <EmailList currentBox={name} navigateTo="Sent Email" />
      <Compose />
    </View>
  );
}

export default SendInbox;
