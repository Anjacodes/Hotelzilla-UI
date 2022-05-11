import { createAsyncThunk } from '@reduxjs/toolkit';
import store from '../configStore';

// *Fetch all available hotels
export const getAllHotels = createAsyncThunk('getAllHotels', async () => {
  const url = 'https://hotelzilla-api.herokuapp.com/api/hotels/';
  const token = store.getState().login.token;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authentication: token,
    },
  });
  return response.json();
});
