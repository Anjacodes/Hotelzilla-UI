/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import getAllRooms from './room-helper';

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

export const getAllRoomsAsync = () => async (dispatch) => {
  const data = await getAllRooms();
  dispatch(getAll(data));
};

export default hotelSlice.reducer;
