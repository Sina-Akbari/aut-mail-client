import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import EmailList from '@components/EmailList';
import { getEmailsAPI } from '@core/api/box';

function Box({ route }) {
  const [data, setData] = useState([]);
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
    };
    getEmails();
  }, [name]);

  return (
    <View>
      <EmailList navigateTo={`${name} Email`} data={data} />
    </View>
  );
}

export default Box;
