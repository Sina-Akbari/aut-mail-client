import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import day from 'dayjs';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { deleteEmailAPI } from '@core/api/box';

export default ({ from, subject, date, cc, id }) => {
  const navigation = useNavigation();
  const currentBox = navigation.dangerouslyGetState().routes[0];

  return (
    <View style={styles.container}>
      <View style={styles.fieldContainer}>
        <Text style={styles.header}>From:</Text>
        <Text style={styles.description}>
          {from && (from.name || from.address)}
        </Text>
        <TouchableOpacity
          onPress={() => {
            deleteEmailAPI(id, currentBox)
              .then(() => {
                console.log(currentBox);
                navigation.goBack();
              })
              .catch((err) => console.log(err));
          }}>
          <Image
            style={styles.trash}
            source={require('@assets/images/Trash.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.header}>Subject:</Text>
        <Text style={styles.description}> {subject}</Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.header}>Date:</Text>
        <Text style={styles.description}>
          {' '}
          {date ? day(date).format('YYYY-MM-DD HH:mm') : ''}
        </Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.header}>CC:</Text>
        <Text style={styles.description}>
          {' '}
          {cc &&
            cc
              .map((item) => {
                return item.name || item.address;
              })
              .join(', ')}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  header: {
    fontSize: 10,
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
  description: {
    fontSize: 10,
    flex: 5,
    textAlign: 'left',
  },
  trash: {
    height: 16,
    aspectRatio: 1,
  },
});
