import React from 'react';
import { Text } from 'react-native';
import { translate } from '@translations';
import Button from '@components/Button';
import { useDispatch } from 'react-redux';
import { logout } from '@features/AuthStack/redux/actions';
import { toggleTheme } from '@core/redux/theme/actions';

function Inbox({ navigation }) {
  const dispatch = useDispatch();

  return (
    <>
      <Text>{translate('hello')}</Text>
      <Text>{translate('Good morning')}</Text>
      <Text>Currency: {translate('Currency')}</Text>
      <Button onPress={() => dispatch(logout())}>Logout</Button>
      <Button onPress={() => dispatch(toggleTheme())}>Toggle Theme</Button>
    </>
  );
}

export default Inbox;
