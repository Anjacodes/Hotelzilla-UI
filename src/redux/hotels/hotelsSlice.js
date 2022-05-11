import { createSlice } from '@reduxjs/toolkit';
import { getAllHotels } from './hotelsHelper';

const initialState = {
  getHotels: '',
  hotels: [],
};

const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    resetStatus(state) {
      state.getHotels = '';
    },
  },
  extraReducers: {
    [getAllHotels.fulfilled]: (state, action) => {
      state.getHotels = 'fulfilled';
      state.hotels = action.payload;
    },
  },
});

export default hotelsSlice.reducer;

export const { resetStatus } = hotelsSlice.actions;
