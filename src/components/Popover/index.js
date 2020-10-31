import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Button, Layout, Popover } from '@ui-kitten/components';
import { translate } from '@translations';
import { deleteEmailAPI } from '@core/api/box';
import { openFolderModal } from '@core/redux/folderModal/actions';
import { useDispatch } from 'react-redux';

const PopoverButton = ({ emailId, currentBox }) => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const renderToggleButton = () => (
    <Button style={styles.button} onPress={() => setVisible(true)}>
      <Avatar style={styles.icon} source={require('@assets/images/More.png')} />
    </Button>
  );

  return (
    <Popover
      visible={visible}
      backdropStyle={styles.backdrop}
      anchor={renderToggleButton}
      onBackdropPress={() => setVisible(false)}>
      <Layout style={styles.content}>
        <Button
          appearance="ghost"
          size="small"
          onPress={() => {
            deleteEmailAPI(emailId, currentBox)
              .then(() => {
                setVisible(false);
              })
              .catch((err) => console.log(err));
          }}>
          {translate('Delete')}
        </Button>
        <Button
          size="small"
          appearance="ghost"
          onPress={() => {
            dispatch(openFolderModal(currentBox, emailId));
            setVisible(false);
          }}>
          {translate('MoveFolder')}
        </Button>
      </Layout>
    </Popover>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
  popoverItem: {
    borderWidth: 0,
  },
  button: {
    width: 10,
    height: 10,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  icon: {
    width: 8,
    height: 8,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default PopoverButton;
