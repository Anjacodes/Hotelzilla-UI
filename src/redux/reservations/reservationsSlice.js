import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const URL = 'https://hotelzilla-api.herokuapp.com/api/reservations';

// create the thunk
export const fetchUserReservations = createAsyncThunk(
  'reservations/fetchUserReservations',
  async (token) => {
    const response = await fetch(URL, {
      headers: {
        Authorization: token,
      },
    });
    const data = await response.json();
    return data;
  },
);

export const createReservation = createAsyncThunk(
  'createReservation',
  async ({ token, reservationData }) => {
    console.log('reservationData', JSON.stringify(reservationData));
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        Authorization: token,
      },
      body: JSON.stringify(reservationData),
    });
    return response.json();
  },
);

const initialState = {
  reservations: [],
  loading: false,
  rejected: false,
  createReservationStatus: '',
};

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    resetCreateReservationStatus(state) {
      state.createReservationStatus = '';
    },
  },
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
    [createReservation.pending]: (state) => {
      state.createReservationStatus = 'pending';
    },
    [createReservation.fulfilled]: (state) => {
      state.createReservationStatus = 'fulfilled';
    },
    [createReservation.rejected]: (state) => {
      state.createReservationStatus = 'rejected';
    },
  },
});

export const reservationsReducer = reservationsSlice.reducer;

export const { resetCreateReservationStatus } = reservationsSlice.actions;
