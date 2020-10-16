export const ROUTE_CHANGE = 'ROUTE_CHANGE';

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case ROUTE_CHANGE:
      console.log(ROUTE_CHANGE, action);
      return action.payload;
    default:
      return state;
  }
};
