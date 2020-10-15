import Axios from './';

export const getEmailsAPI = async (offset, limit, box = 'INBOX') => {
  let success = null;
  let error = null;
  try {
    success = await Axios.get('/mails', { params: { offset, limit, box } });
  } catch (e) {
    error = e;
  }

  return { success: success.data, error };
};

export const getEmailAPI = async (id, box = 'INBOX') => {
  let success = null;
  let error = null;
  try {
    success = await Axios.get(`/mails/${id}`, { params: { box } });
  } catch (e) {
    error = e;
  }

  return { success: success.data, error };
};

export const deleteEmailAPI = async (id, box = 'INBOX') => {
  let success = null;
  let error = null;
  try {
    success = await Axios.delete(`/mails/${id}`, { params: { box } });
  } catch (e) {
    error = e;
  }

  return { success: success.data, error };
};

export const getBoxes = async () => {
  let success = null;
  let error = null;
  try {
    success = await Axios.get('/boxes');
  } catch (e) {
    error = e;
  }

  return { success: success.data, error };
};
