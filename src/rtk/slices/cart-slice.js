import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      const findeProduct = state.find((product) => product.id === action.payload.id)
      if(findeProduct)
      {
        findeProduct.quantity++;
      }
      else
        state.push({...action.payload, quantity: 1});
    },
    deleteFromCart: (state, action) => {
      return state.filter((prod) => prod.id !== action.payload)
    },
    clear: (state, action) => {
      return [];
    }
  }
})

export const {addToCart, deleteFromCart, clear} = cartSlice.actions;
export default cartSlice.reducer;