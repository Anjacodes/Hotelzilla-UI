/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getAllHotelsAsync from './hotel-helper';

const initialState = {
  all: [],
  loading: false,
  error: '',
};

export const getAllHotels = createAsyncThunk('hotels', async () => getAllHotelsAsync());

const hotelSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {
    getAll: (state, action) => {
      state.all = action.payload;
    },
  },
  extraReducers: {
    [getAllHotels.pending]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [getAllHotels.fulfilled]: (state, { payload }) => {
      state.all = payload;
    },
    [getAllHotels.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export const hotelActions = hotelSlice.actions;

export default hotelSlice.reducer;
