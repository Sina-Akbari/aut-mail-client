import EmailInfo from '@components/EmailInfo';
import { getEmailAPI } from '@core/api/box';
import { Layout } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import WebView from 'react-native-webview';
import { useSelector } from 'react-redux';

function Email({ route: ROUTE }) {
  const { id } = ROUTE.params;
  const route = useSelector((state) => state.route.split(' ')[0]);

  const [from, setFrom] = useState(null);
  const [subject, setSubject] = useState(null);
  const [date, setDate] = useState(null);
  const [cc, setCC] = useState(null);
  const [html, setHtml] = useState(null);

  useEffect(() => {
    const getEmail = async () => {
      const { success, error } = await getEmailAPI(id, route);
      if (success) {
        setFrom(success.from[0]);
        setSubject(success.subject);
        setHtml(success.html);
        setDate(success.date);
        setCC(success.cc);
      } else {
        console.log(error);
      }
    };
    getEmail();
  }, [id, route]);
  return (
    <Layout style={styles.container}>
      <EmailInfo from={from} subject={subject} date={date} cc={cc} id={id} />
      <WebView style={styles.webView} source={{ html: html ? html : '' }} />
    </Layout>
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
