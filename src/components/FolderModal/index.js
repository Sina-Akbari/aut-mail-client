import React from 'react';
import Modal from 'react-native-modal';
import { Button, Divider, List } from '@ui-kitten/components';
import { Platform, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { moveFolderAPI } from '@core/api/box';
import { translate } from '@translations';
import { closeFolderModal } from '@core/redux/folderModal/actions';

const FolderModal = () => {
  const { state, box, emailId } = useSelector((st) => st.folderModal);
  const boxes = useSelector((st) => st.boxes);
  const dispatch = useDispatch();

  return (
    <Modal style={styles.modal} isVisible={state}>
      <List
        data={boxes}
        renderItem={({ item }) => {
          return (
            <Button
              appearance="ghost"
              onPress={() => {
                moveFolderAPI(box, item, emailId)
                  .then(() => {
                    dispatch(closeFolderModal());
                  })
                  .catch((err) => console.log(err));
              }}>
              {item}
            </Button>
          );
        }}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={() => <Divider />}
        style={styles.modalContainer}
        ListFooterComponent={
          <Button
            appearance="ghost"
            onPress={() => {
              dispatch(closeFolderModal());
            }}>
            {translate('Close')}
          </Button>
        }
      />
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    paddingTop: Platform.OS === 'ios' ? 64 : 32,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 32,
    paddingHorizontal: 10,
  },
});

export default FolderModal;
