import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

// add here the reducers!!
const reducer = {};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
