import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import themeReducer from '@core/redux/theme/reducer';
import authReducer from '@features/AuthStack/redux/reducer';

export const rootReducer = combineReducers({
  theme: themeReducer,
  auth: authReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [thunk];

const store = createStore(persistedReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default store;
