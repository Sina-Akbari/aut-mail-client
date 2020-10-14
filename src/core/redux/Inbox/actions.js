import { getInboxAPI } from '../../api/inbox';

const GET_INBOX = 'GET_INBOX';

export const getInbox = (offset, limit) => (dispatch) => {
  getInboxAPI(offset, limit)
    .then((res) => {
      dispatch({
        type: GET_INBOX,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
