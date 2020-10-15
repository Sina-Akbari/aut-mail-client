import { GET_INBOX } from './constants';

export default (state = [], action) => {
  switch (action.type) {
    case GET_INBOX:
      return action.payload;
    default:
      return [];
  }
};
