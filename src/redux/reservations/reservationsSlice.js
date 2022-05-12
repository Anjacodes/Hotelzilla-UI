import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const URL = 'https://hotelzilla-api.herokuapp.com/api/reservations';

const token = JSON.parse(localStorage.getItem('token'));

// create the thunk
export const fetchUserReservations = createAsyncThunk(
  'reservations/fetchUserReservations',
  async () => {
    const response = await fetch(URL, {
      headers: {
        Authorization: token,
      },
    });
    const data = await response.json();
    return data;
  },
);

const initialState = {
  reservations: [],
  loading: false,
  rejected: false,
};

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUserReservations.pending]: (state) => {
      state.loading = true;
    },
    [fetchUserReservations.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.reservations = payload;
    },
    [fetchUserReservations.rejected]: (state) => {
      state.loading = false;
      state.rejected = true;
    },
  },
});

export const reservationsReducer = reservationsSlice.reducer;
