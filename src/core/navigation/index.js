import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import AuthenticationStack from '@features/AuthStack';
import HomeStack from '@features/HomeStack';
import SendStack from '@features/SendStack';
import { useDispatch, useSelector } from 'react-redux';
import CustomDrawerNavigation from './CustomDrawerNavigation';
import { StyleSheet } from 'react-native';
import { ROUTE_CHANGE } from './reducer';
import { getAllBoxes } from '@core/redux/boxes/actions';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const getActiveRouteName = (state) => {
  const route = state.routes[state?.index || 0];

  if (route.state) {
    // Dive into nested navigators
    return getActiveRouteName(route.state);
  }

  return route.name;
};

export default function NavigationProvider() {
  const token = useSelector((state) => state.token);
  const boxes = useSelector((state) => state.boxes);
  console.log('BOXES', boxes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBoxes());
  }, [dispatch]);

  return (
    <NavigationContainer
      onStateChange={(state) => {
        if (!state) {
          return;
        }
        //@ts-ignore
        dispatch({ type: ROUTE_CHANGE, payload: getActiveRouteName(state) });
      }}>
      {token ? (
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={(props) => <CustomDrawerNavigation {...props} />}>
          {/* {boxes.map((box) => (
            <Drawer.Screen name={box}
              component={BoxStack}
            />
          ))} */}
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

const styles = StyleSheet.create({
  hamburgerButton: {
    width: 16,
    aspectRatio: 1,
  },
});
