import React, { Fragment, useState } from 'react';
import { StyleSheet, TouchableOpacity, Platform } from 'react-native';

import Modal from 'react-native-modal';
import { sendEmailAPI } from '@core/api/send';
import { Avatar, Button, Input, Layout } from '@ui-kitten/components';
import { translate } from '@translations';

function Compose() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [cc, setCc] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = async () => {
    const { success, error } = await sendEmailAPI(
      to,
      subject,
      cc.split(' ').join(', '),
      message,
    );
    if (success) {
      closeModal();
    } else {
      console.log(error);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const openModal = () => {
    setModalVisible(true);
  };

  return (
    <Fragment>
      <TouchableOpacity style={styles.fabButton} onPress={openModal}>
        <Avatar
          style={styles.image}
          source={require('@assets/images/Plus.png')}
        />
      </TouchableOpacity>
      <Modal style={styles.modal} isVisible={isModalVisible}>
        <Layout style={styles.modalContainer}>
          <Input
            placeholder="To"
            value={to}
            onChangeText={(text) => setTo(text)}
            style={styles.field}
          />
          <Input
            placeholder="Subject"
            value={subject}
            onChangeText={(text) => setSubject(text)}
            style={styles.field}
          />
          <Input
            placeholder="cc"
            value={cc}
            onChangeText={(text) => setCc(text)}
            style={styles.field}
          />
          <Input
            placeholder="Message"
            value={message}
            onChangeText={(text) => setMessage(text)}
            textStyle={styles.message}
            style={styles.messageContainer}
            multiline
          />
          <Button
            style={styles.send}
            onPress={() => {
              sendEmail();
            }}>
            {translate('Send')}
          </Button>
          <Button style={styles.close} onPress={closeModal}>
            {translate('Close')}
          </Button>
        </Layout>
      </Modal>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {},
  fabButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    padding: 16,
    borderRadius: 50,
    zIndex: 100,
    backgroundColor: '#fdb415',
  },
  image: {
    width: 30,
    height: 30,
  },
  modal: {
    paddingTop: Platform.OS === 'ios' ? 64 : 32,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 32,
    paddingHorizontal: 10,
  },
  field: {
    padding: 10,
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  message: {
    minHeight: 160,
  },
  messageContainer: {
    padding: 10,
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  send: {
    marginBottom: 10,
  },
});

export default Compose;
