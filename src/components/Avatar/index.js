import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default ({}) => {
  return (
    <Image style={styles.image} source={require('@assets/images/Avatar.png')} />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#ffc400',
  },
});
