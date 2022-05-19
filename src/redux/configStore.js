import { configureStore } from '@reduxjs/toolkit';
import { detailsReducer } from './details/detailsSlice';
import loginReducer from './login/login';
import registerReducer from './register/registerSlice';
import { reservationsReducer } from './reservations/reservationsSlice';
import hotelReducer from './hotel/hotel';
import cityReducer from './city/city';
import roomTypesReducer from './roomTypes/roomTypesSlice';

// add here the reducers!!
const reducer = {
  login: loginReducer,
  details: detailsReducer,
  reservations: reservationsReducer,
  hotel: hotelReducer,
  register: registerReducer,
  city: cityReducer,
  roomTypes: roomTypesReducer,
};

const store = configureStore({
  reducer,
});

export default store;
