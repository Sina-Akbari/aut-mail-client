import { OPEN_FOLDER_MODAL, CLOSE_FOLDER_MODAL } from './types';

const initialState = {
  state: false,
  box: 'INBOX',
  emailId: 1,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_FOLDER_MODAL:
      return action.payload;
    case CLOSE_FOLDER_MODAL:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
