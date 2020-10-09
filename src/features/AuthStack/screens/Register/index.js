import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import { translate } from '@translations';
import Fonts from '@utils/Fonts';

function Register({ navigation }) {
  return (
    <Layout style={styles.root}>
      <Text category="h5" style={styles.text}>
        {translate('Register')}
      </Text>
    </Layout>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: Fonts.IRANYekan.Light,
  },
});
export default Register;
