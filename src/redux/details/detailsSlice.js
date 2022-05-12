import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const URL = 'https://hotelzilla-api.herokuapp.com/api/hotels/';

export const fetchDetails = createAsyncThunk('rooms/fetchDetails',
  async (roomId) => {
    const response = await fetch(`${URL}${roomId}`);
    const data = await response.json();
    return data;
  });

const initialState = {
  roomDetails: [],
  loading: false,
};

const detailsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchDetails.pending]: (state) => {
      state.loading = true;
    },
    [fetchDetails.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.roomDetails = payload;
    },
    [fetchDetails.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const detailsReducer = detailsSlice.reducer;
