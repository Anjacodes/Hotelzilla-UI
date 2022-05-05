import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './login/login';
import logger from 'redux-logger';

// add here the reducers!!
const reducer = {
  token: loginReducer,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
