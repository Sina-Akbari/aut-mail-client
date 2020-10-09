import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import AuthenticationStack from '@features/AuthStack';
import HomeStack from '@features/HomeStack';
import SendStack from '@features/SendStack';
import { useSelector } from 'react-redux';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function NavigationProvider() {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeStack} />
          <Drawer.Screen name="Send" component={SendStack} />
        </Drawer.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Authentication" component={AuthenticationStack} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
