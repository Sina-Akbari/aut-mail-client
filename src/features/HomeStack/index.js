import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Inbox from './screens/Inbox';
import RecievedEmail from './screens/RecievedEmail';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inbox" component={Inbox} />
      <Stack.Screen name="RecievedEmail" component={RecievedEmail} />
    </Stack.Navigator>
  );
}

export default HomeStack;
