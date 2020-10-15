import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { useDispatch } from 'react-redux';
import { logout } from '@features/AuthStack/redux/actions';

export default (props) => {
  const dispatch = useDispatch();

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Logout" onPress={() => dispatch(logout())} />
    </DrawerContentScrollView>
  );
};
