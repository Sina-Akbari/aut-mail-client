import React from 'react';
import { StyleSheet, View } from 'react-native';
import EmailList from '@components/EmailList';
import Compose from '@components/Compose';

function Box({ route: { name } }) {
  return (
    <View style={styles.container}>
      <EmailList currentBox={name} navigateTo={`${name} Email`} />
      <Compose />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },
});

export default Box;
