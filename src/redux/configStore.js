import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import detailsReducer from './details/detailsSlice';
import loginReducer from './login/login';
import registerReducer from './register/registerSlice';
import { reservationsReducer } from './reservations/reservationsSlice';
import roomReducer from './room/room';

// add here the reducers!!
const reducer = {
  login: loginReducer,
  details: detailsReducer,
  reservations: reservationsReducer,
  room: roomReducer,
  register: registerReducer,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;