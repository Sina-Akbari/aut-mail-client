import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import AuthenticationStack from '@features/AuthStack';
import HomeStack from '@features/HomeStack';
import SendStack from '@features/SendStack';
import BoxStack from '@features/BoxStack';
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
    return getActiveRouteName(route.state);
  }

  return route.name;
};

export default function NavigationProvider() {
  const token = useSelector((state) => state.token);
  const boxes = useSelector((state) =>
    state.boxes.filter((box) => !['INBOX', 'Sent'].includes(box)),
  );
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
        dispatch({ type: ROUTE_CHANGE, payload: getActiveRouteName(state) });
      }}>
      {token ? (
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={(props) => <CustomDrawerNavigation {...props} />}>
          <Drawer.Screen name="Home" component={HomeStack} />
          <Drawer.Screen name="Sent" component={SendStack} />
          {boxes.map((box) => {
            return (
              <Drawer.Screen
                key={box}
                name={box}
                component={BoxStack}
                initialParams={{ name: box }}
              />
            );
          })}
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
