import Axios from 'axios';
import { getTokenFromStore } from '@utils/getTokenFromStore';
import store from '@core/redux/store';
import AsyncStorage from '@react-native-community/async-storage';
import { API_URL } from '../../../env.json';
import { logout } from '@features/AuthStack/redux/actions';

export const configuredAxios = Axios.create({
  baseURL: API_URL || 'https://nest-mail.herokuapp.com',
});

configuredAxios.interceptors.response.use(
  (res) => res,
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response) {
      console.log('ERROR RESPONSE', error.response);
      if (error.response.status === 401 && store.getState().token) {
        store.dispatch(logout());
      }
      // state.dispatch(showError(error.response.data.message));
      return { ...error.response.data, status: error.response.status };
    } else if (error.request) {
      console.log('ERROR REQUEST', error.request);
      // state.dispatch(showError('Network connection error!'));
      return error;
    } else {
      console.log('ERROR MESSAGE', error.messsage);
      return error.message;
    }
  },
);

configuredAxios.interceptors.request.use(
  async (config) => {
    const token = JSON.parse(
      (await AsyncStorage.getItem('persist:root')) || '{}',
    )?.token.replace(/"/g, '');

    if (token !== 'null') {
      config.headers.Authorization = 'Bearer ' + token;
    } else {
      config.headers.Authorization = 'Bearer ' + getTokenFromStore();
    }

    // config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

export default configuredAxios;
