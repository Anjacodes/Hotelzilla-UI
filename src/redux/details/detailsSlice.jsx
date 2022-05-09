import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  name: "",
  description: "",
  capacity: "",
  rating: "",
  price: "",
  image: "",
  hotel: "",
  reserved: false
}

export const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    getDetailsSuccess: (state, {payload}) => {
      state.name = payload.title,
      state.description = payload.description
      state.price = payload.price
      state.hotel = payload.brand
    },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { getDetailsSuccess } = detailsSlice.actions

export default detailsSlice.reducer