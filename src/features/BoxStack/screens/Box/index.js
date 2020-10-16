import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import EmailList from '@components/EmailList';
import { getEmailsAPI } from '@core/api/box';
import Compose from '@components/Compose';

function Box({ route }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { name } = route;
  console.log('name', name);

  useEffect(() => {
    const getEmails = async () => {
      const { success, error } = await getEmailsAPI(1, 100, name);
      if (success) {
        setData(success);
        console.log('Success', success);
      } else {
        console.log(error);
      }
      setLoading(false);
    };
    getEmails();
  }, [name]);

  return (
    <View style={styles.container}>
      <EmailList loading={loading} navigateTo={`${name} Email`} data={data} />
      <Compose />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },
});

export default Box;
