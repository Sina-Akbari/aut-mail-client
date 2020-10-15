import Axios from './';

export const getRecievedEmailsAPI = async (offset, limit) => {
  let success = null;
  let error = null;
  try {
    success = await Axios.get('/mails', { params: { offset, limit } });
  } catch (e) {
    error = e;
  }

  return { success: success.data, error };
};

export const getRecievedEmailAPI = async (id) => {
  let success = null;
  let error = null;
  try {
    success = await Axios.get(`/mails/${id}`);
  } catch (e) {
    error = e;
  }

  return { success: success.data, error };
};
