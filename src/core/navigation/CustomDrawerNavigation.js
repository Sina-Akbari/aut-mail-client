import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { useDispatch } from 'react-redux';
import { logout } from '@features/AuthStack/redux/actions';
import { toggleTheme } from '@core/redux/theme/actions';
import { withStyles } from '@ui-kitten/components';
import useStyles from './styles';

const CustomeDrawerNavigation = ({ eva, ...props }) => {
  const dispatch = useDispatch();

  return (
    <DrawerContentScrollView {...props} style={eva.style.root}>
      <DrawerItemList {...props} labelStyle={eva.style.item} />
      <DrawerItem
        label="Change Theme"
        onPress={() => dispatch(toggleTheme())}
        labelStyle={eva.style.item}
      />
      <DrawerItem
        label="Logout"
        onPress={() => dispatch(logout())}
        labelStyle={eva.style.item}
      />
    </DrawerContentScrollView>
  );
};

export default withStyles(CustomeDrawerNavigation, useStyles);
