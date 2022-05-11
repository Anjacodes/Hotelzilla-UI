/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import getAllCities from './city-helper';

const initialState = {
  all: [],
};

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    getAll: (state, action) => {
      state.all = action.payload;
    },
  },
});

export const { getAll } = citySlice.actions;

export const getAllCitiesAsync = () => async (dispatch) => {
  const data = await getAllCities();
  dispatch(getAll(data));
};

export default citySlice.reducer;
