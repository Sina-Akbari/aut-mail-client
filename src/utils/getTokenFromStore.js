import store from '@core/redux/store';

export const getTokenFromStore = () => {
  return store.getState().token;
};
