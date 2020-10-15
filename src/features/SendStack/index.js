import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SentInbox from './screens/SentInbox';
import Compose from './screens/Compose';
import SentEmail from './screens/SentEmail';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Sent" component={SentInbox} />
      <Stack.Screen name="Compose" component={Compose} />
      <Stack.Screen name="Sent Email" component={SentEmail} />
    </Stack.Navigator>
  );
}

export default HomeStack;
