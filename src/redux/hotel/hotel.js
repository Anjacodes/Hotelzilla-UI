/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getAllHotelsAsync, { deleteHotel } from './hotel-helper';

const initialState = {
  all: [],
  loading: false,
  deleteStatus: '',
  error: '',
};

export const getAllHotels = createAsyncThunk('hotels', async () =>
  getAllHotelsAsync(),
);

const hotelSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {
    getAll: (state, action) => {
      state.all = action.payload;
    },
    resetDeleteStatus: (state) => {
      state.deleteStatus = '';
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
    [deleteHotel.rejected]: (state) => {
      state.deleteStatus = 'rejected';
    },
    [deleteHotel.pending]: (state) => {
      state.deleteStatus = 'pending';
    },
    [deleteHotel.fulfilled]: (state, action) => {
      return {
        ...state,
        deleteStatus: 'fulfilled',
        all: state.all.filter((hotel) => hotel.id !== action.meta.arg),
      };
    },
  },
});

export const hotelActions = hotelSlice.actions;

export const { resetDeleteStatus } = hotelSlice.actions;

export default hotelSlice.reducer;
