import { getAllBoxAPI } from '@core/api/box';
import { GET_ALL_BOX } from './types';

export const getAllBoxes = () => async (dispatch) => {
  const { success, error } = await getAllBoxAPI();
  if (success) {
    dispatch({ type: GET_ALL_BOX, payload: success });
  } else {
  }
};
