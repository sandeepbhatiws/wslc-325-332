import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state) => {
      state.value += 1
    },
    removeItem: (state) => {
      state.value -= 1
    },
    updateCart: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, updateCart } = cartSlice.actions

export default cartSlice.reducer