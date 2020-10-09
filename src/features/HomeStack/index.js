import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Inbox from './screens/Inbox';
import Email from './screens/Email';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inbox" component={Inbox} />
      <Stack.Screen name="Email" component={Email} />
    </Stack.Navigator>
  );
}

export default HomeStack;
