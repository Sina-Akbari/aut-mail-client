import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import themeReducer from '@core/redux/theme/reducer';
import authReducer from '@features/AuthStack/redux/reducer';
import inboxReducer from '@features/HomeStack/redux/reducers';
import sendReducer from '@features/SendStack/redux/reducers';
import routeReducer from '@core/navigation/reducer';
import boxReducer from '@core/redux/boxes/reducer';

const initialState = {
  theme: 'light',
  token: null,
  route: null,
  inbox: [],
  sendBox: [],
  boxes: ['INBOX', 'Sent'],
};

export const rootReducer = combineReducers({
  theme: themeReducer,
  token: authReducer,
  route: routeReducer,
  inbox: inboxReducer,
  sendBox: sendReducer,
  boxes: boxReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [thunk];

const store = createStore(
  persistedReducer,
  initialState,
  applyMiddleware(...middlewares),
);

export const persistor = persistStore(store);

export default store;
