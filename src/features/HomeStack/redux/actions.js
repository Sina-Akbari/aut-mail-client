import { getEmailsAPI } from '@core/api/box';
import { stopLoading } from '@core/redux/loading/actions';
import { GET_INBOX } from './constants';

export const getInbox = (offset = 1, limit = 1000) => async (dispatch) => {
  const { success, error } = await getEmailsAPI(offset, limit);

  if (success) {
    dispatch({ type: GET_INBOX, payload: success });
    dispatch(stopLoading());
  } else {
  }
};
