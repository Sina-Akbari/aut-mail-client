import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Box from './screens/Box';
import BoxEmail from './screens/BoxEmail';

const Stack = createStackNavigator();

function BoxStack({ route }) {
  const { name } = route.params;

  return (
    <Stack.Navigator>
      <Stack.Screen name={`${name}`} component={Box} />
      <Stack.Screen name={`${name} Email`} component={BoxEmail} />
    </Stack.Navigator>
  );
}

export default BoxStack;
