import Axios from 'axios';
import { getTokenFromStore } from '@utils/getTokenFromStore';
import store from '@core/redux/store';
import AsyncStorage from '@react-native-community/async-storage';

export const configuredAxios = Axios.create({
  baseURL: `http://${process.env.REACT_APP_HOST_API}`,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

configuredAxios.interceptors.response.use(
  function ({ config, data, headers, status, statusText, request }) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    const response = { ...data, status };
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response) {
      console.log('ERROR RESPONSE', error.response);
      if (error.response.status === 401 && store.getState().token) {
        // store.dispatch(logoutSuccess());
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
  (config) => {
    const token = JSON.parse(
      AsyncStorage.getItem('persist:root') || '{}',
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
