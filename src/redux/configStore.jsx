import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import detailsReducer from './details/detailsSlice';
import loginReducer from './login/login';

// add here the reducers!!
const reducer = {
  login: loginReducer,
  details: detailsReducer,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
