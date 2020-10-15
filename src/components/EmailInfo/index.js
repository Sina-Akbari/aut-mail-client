import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default ({ from, subject }) => {
  return (
    <View style={styles.container}>
      <View style={styles.fieldContainer}>
        <Text style={styles.header}>From:</Text>
        <Text style={styles.username}>
          {from ? from.name || from.address : 'Username'}
        </Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.header}>Subject:</Text>
        <Text style={styles.subject}> {subject || 'Subject'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  header: {
    fontWeight: '700',
    marginRight: 16,
    flex: 1,
  },
  fieldContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    paddingHorizontal: 16,
  },
  username: {
    textAlign: 'left',
    flex: 1,
  },
  subject: {
    textAlign: 'left',
    flex: 1,
  },
});
