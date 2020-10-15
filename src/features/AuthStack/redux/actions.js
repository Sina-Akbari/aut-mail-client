import { loginAPI } from '@core/api/authentication';
import { LOGIN, LOGOUT } from './types';

export const login = (username, password) => async (dispatch) => {
  const { success, error } = await loginAPI(username, password);
  if (success) {
    dispatch({ type: LOGIN, payload: success.accessToken });
  } else {
    console.log(error);
  }
};

export const logout = () => {
  return { type: LOGOUT };
};
