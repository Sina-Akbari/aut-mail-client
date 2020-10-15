import { getRecievedEmailsAPI } from '@core/api/inbox';
import { GET_INBOX } from './constants';

export const getInbox = (offset = 1, limit = 100) => async (dispatch) => {
  const { success, error } = await getRecievedEmailsAPI(offset, limit);

  if (success) {
    dispatch({ type: GET_INBOX, payload: success });
  } else {
  }
};
