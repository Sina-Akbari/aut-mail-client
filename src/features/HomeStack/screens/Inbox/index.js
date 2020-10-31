import React from 'react';
import { View } from 'react-native';
import EmailList from '../components/EmailList';
import Compose from '@components/Compose';
import FolderModal from '@components/FolderModal';

function Inbox({ route: { name } }) {
  return (
    <View>
      <EmailList currentBox={name} navigateTo="Recieved Email" />
      <Compose />
      <FolderModal />
    </View>
  );
}

export default Inbox;
