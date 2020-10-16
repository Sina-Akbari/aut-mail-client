import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default ({ isSeen }) => {
  return (
    <Image
      style={[
        styles.image,
        !isSeen ? { borderWidth: 5, borderColor: '#fa8a02' } : {},
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
