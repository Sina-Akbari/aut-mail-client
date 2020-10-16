import { GET_ALL_BOX } from './types';

const initialState = ['INBOX', 'SENT'];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BOX:
      return action.payload;
    default:
      return state;
  }
};
