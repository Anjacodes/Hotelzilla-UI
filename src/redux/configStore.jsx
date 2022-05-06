import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import detailsReducer from './details/detailsSlice';

// add here the reducers!!
const reducer = {
  details: detailsReducer
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
