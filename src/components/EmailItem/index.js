import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Avatar from '@components/Avatar';

export default ({ username, subject, navigateTo }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.touchable}
      onPress={() => {
        navigation.navigate(navigateTo);
      }}>
      <View style={styles.container}>
        <Avatar />
        <View style={{ justifyContent: 'center' }}>
          <Text style={styles.username}>{username || 'USERNAME'}</Text>
          <Text style={styles.subject}>{subject || 'SUBJECT'}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    width: '100%',
    height: 70,
    padding: 10,
    margin: 0,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    fontSize: 18,
    color: '#212121',
    fontWeight: 'bold',
  },
  subject: {
    fontSize: 16,
  },
});