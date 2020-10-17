import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Avatar from '@components/Avatar';
import { Layout, Text } from '@ui-kitten/components';

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
      <Layout style={styles.container}>
        <Avatar isSeen={isSeen} />
        <Layout style={styles.textContainer}>
          <Text style={styles.username}>
            {from.name || from.address || 'USERNAME'}
          </Text>
          <Text style={styles.subject}>{subject || 'SUBJECT'}</Text>
        </Layout>
      </Layout>
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
    fontWeight: 'bold',
    textAlign: 'left',
  },
  subject: {
    fontSize: 12,
    textAlign: 'left',
  },
});
