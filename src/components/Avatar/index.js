import { Avatar } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet } from 'react-native';

export default ({ isSeen }) => {
  return (
    <Avatar
      style={[
        styles.image,
        !isSeen ? { borderWidth: 5, borderColor: '#41de12' } : {},
      ]}
      source={require('@assets/images/Avatar.png')}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 45,
    height: 45,
    borderRadius: 30,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#ffc400',
  },
});
