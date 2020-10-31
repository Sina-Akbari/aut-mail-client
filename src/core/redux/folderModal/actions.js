import { CLOSE_FOLDER_MODAL, OPEN_FOLDER_MODAL } from './types';

export const openFolderModal = (box, emailId) => {
  return {
    type: OPEN_FOLDER_MODAL,
    payload: {
      state: true,
      box,
      emailId,
    },
  };
};

export const closeFolderModal = () => {
  return {
    type: CLOSE_FOLDER_MODAL,
    payload: {
      state: false,
    },
  };
};
