import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Avatar from '@components/Avatar';

export default ({ id, from, subject, isSeen, navigateTo }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[
        styles.touchable,
        !isSeen ? { borderRightWidth: 5, borderColor: '#fa8a02' } : {},
      ]}
      onPress={() => {
        navigation.navigate(navigateTo, { id });
      }}>
      <View style={styles.container}>
        <Avatar isSeen={isSeen} />
        <View style={styles.textContainer}>
          <Text style={styles.username}>
            {from.name || from.address || 'USERNAME'}
          </Text>
          <Text style={styles.subject}>{subject || 'SUBJECT'}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    width: '100%',
    height: 60,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  textContainer: {
    maxWidth: '80%',
  },
  username: {
    fontSize: 16,
    color: '#212121',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  subject: {
    fontSize: 12,
    textAlign: 'left',
  },
});
