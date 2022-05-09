import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const URL = 'https://dummyjson.com/products/?limit=5';

// create the thunk
export const fetchUserReservations = createAsyncThunk(
  'reservations/fetchUserReservations',
  async () => {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  },
);

const initialState = {
  reservations: [],
  loading: false,
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
    },
  },
});

export const reservationsReducer = reservationsSlice.reducer;
