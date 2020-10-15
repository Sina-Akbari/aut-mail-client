import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';

const Stack = createStackNavigator();

function Authentication() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export default Authentication;
