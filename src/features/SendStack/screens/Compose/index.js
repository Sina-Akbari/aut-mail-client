import React from 'react';
import { Text } from 'react-native';
import { translate } from '@translations';

function Email({ navigation }) {
  return (
    <>
      <Text>{translate('hello')}</Text>
      <Text>{translate('Good morning')}</Text>
      <Text>Currency: {translate('Currency')}</Text>
    </>
  );
}

export default Email;
