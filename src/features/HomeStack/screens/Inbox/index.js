import React from 'react';
import { View } from 'react-native';
import EmailList from '@components/EmailList';

function Inbox({}) {
  return (
    <View>
      <EmailList navigateTo="RecievedEmail" />
    </View>
  );
}

export default Inbox;
