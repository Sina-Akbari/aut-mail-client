import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Avatar from '@components/Avatar';
import { Layout, Text } from '@ui-kitten/components';
import PopoverButton from '@components/Popover';

export default ({ id, from, subject, isSeen, navigateTo, currentBox }) => {
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
        <Layout style={styles.leftSide}>
          <Avatar isSeen={isSeen} />
          <Layout style={styles.textContainer}>
            <Text style={styles.username}>
              {from.name || from.address || 'USERNAME'}
            </Text>
            <Text style={styles.subject}>{subject || 'SUBJECT'}</Text>
          </Layout>
        </Layout>
        <PopoverButton currentBox={currentBox} emailId={id} />
      </Layout>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    width: '100%',
    height: 60,
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
