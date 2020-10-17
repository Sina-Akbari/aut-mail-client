import { StyleSheet } from 'react-native';

export default (theme) =>
  StyleSheet.create({
    root: {
      backgroundColor: theme['background-basic-color-1'],
    },
    item: {
      color: theme['background-alternative-color-1'],
    },
  });
