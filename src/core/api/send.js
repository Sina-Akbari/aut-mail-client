import Axios from './';

export const sendEmailAPI = async (to, subject, cc, html) => {
  let success = null;
  let error = null;
  try {
    success = await Axios.post('/mails', {
      to,
      subject,
      cc,
      html,
    });
  } catch (e) {
    error = e;
  }

  return { success: success.data, error };
};
