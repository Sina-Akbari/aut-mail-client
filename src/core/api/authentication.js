import Axios from './';

export const loginAPI = async (username, password) => {
  let success = null;
  let error = null;
  try {
    success = await Axios.post('/auth/signin', {
      username,
      password,
    });
  } catch (e) {
    error = e;
  }

  return { success: success.data, error };
};
