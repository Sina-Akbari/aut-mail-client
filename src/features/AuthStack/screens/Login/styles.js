import { StyleSheet } from 'react-native';
import Fonts from '@utils/Fonts';

export default (theme) =>
  StyleSheet.create({
    root: {
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme['background-basic-color-1'],
    },
    username: {
      padding: 10,
      borderBottomWidth: 1,
      marginBottom: 10,
      width: '70%',
      fontFamily: Fonts.IRANYekan.Light,
    },
    password: {
      padding: 10,
      borderBottomWidth: 1,
      marginBottom: 10,
      width: '70%',
      fontFamily: Fonts.IRANYekan.Light,
    },
    submit: {},
  });
