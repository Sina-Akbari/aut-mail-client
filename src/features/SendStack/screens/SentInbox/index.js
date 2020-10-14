import React from 'react';
import { View } from 'react-native';
import EmailList from '@components/EmailList';

function SentInbox({ navigation }) {
  return (
    <View>
      <EmailList navigateTo="SentEmail" />
    </View>
  );
}

export default SentInbox;
