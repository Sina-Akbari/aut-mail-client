import EmailInfo from '@components/EmailInfo';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import WebView from 'react-native-webview';

function Email({}) {
  return (
    <View style={styles.container}>
      <EmailInfo />
      <WebView
        originWhitelist={['*']}
        style={styles.webView}
        source={{ uri: 'https://infinite.red' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  webView: {
    flex: 1,
  },
});

export default Email;
