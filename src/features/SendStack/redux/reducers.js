import { GET_SENT_BOX } from './constants';

export default (state = [], action) => {
  switch (action.type) {
    case GET_SENT_BOX:
      return action.payload.reverse();
    default:
      return state;
  }
};
