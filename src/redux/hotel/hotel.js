/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import getAllHotels from './hotel-helper';

const initialState = {
  all: [],
};

const hotelSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {
    getAll: (state, action) => {
      state.all = action.payload;
    },
  },
});

export const { getAll } = hotelSlice.actions;

export const getAllHotelsAsync = () => async (dispatch) => {
  const data = await getAllHotels();
  dispatch(getAll(data));
};

export default hotelSlice.reducer;
