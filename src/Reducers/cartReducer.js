import {  createSlice, current } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cartArray: [],
  },
  reducers: {
    addtoCart: (state, action) => {
      state.cartArray = [...state.cartArray, action.payload];
    },
    removeFromCart: (state, action) => {
      let filtered = state.cartArray.filter((x) => {
        return x.id !== action.payload;
      });
      state.cartArray = filtered;
    },

    updateCart: (state, action) => {
      let data = current(state.cartArray).find((x) => {
        let index = current(state.cartArray).indexOf(x);
        if (x.id == action.payload.id) {
          const clone = Object.assign({}, x);
          clone.Quantity = action.payload.Quantity;
          clone.subTotal = action.payload.Quantity * x.price;
          state.cartArray[index] = clone;
        }
      });
    },
    checkout: (state) => {
      state.cartArray.length = 0;
    },
  },
});
export default cartSlice.reducer;
export const {
  addtoCart,
  removeFromCart,
  updateCart,
  checkout,
} = cartSlice.actions;