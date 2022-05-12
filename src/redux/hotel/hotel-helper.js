import { createAsyncThunk } from '@reduxjs/toolkit';
import store from '../configStore';

const hotelURL = 'https://hotelzilla-api.herokuapp.com/api/hotels';

const getAllHotelsAsync = async () => {
  const response = await fetch(hotelURL);
  const data = await response.json();
  return data;
};

const postHotelAsync = async (token, formData) => {
  const response = await fetch(hotelURL, {
    method: 'POST',
    headers: {
      Authorization: token,
    },
    body: formData,
  });
  const data = await response.json();
  return data;
};

export const deleteHotel = createAsyncThunk('deleteHotel', async (id) => {
  const url = hotelURL + `/${id}`;
  const token = store.getState().login.token;
  const response = await fetch(url, {
    method: 'DELETE',
    headers: { Authorization: token },
  });
  return response.json();
});

export { postHotelAsync };

export default getAllHotelsAsync;
