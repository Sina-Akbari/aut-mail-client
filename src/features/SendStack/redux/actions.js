import { getEmailsAPI } from '@core/api/box';
import { GET_SENT_BOX } from './constants';

export const getSentBox = (offset = 1, limit = 1000) => async (dispatch) => {
  const { success, error } = await getEmailsAPI(offset, limit, 'SENT');

  if (success) {
    dispatch({ type: GET_SENT_BOX, payload: success });
  } else {
  }
};
