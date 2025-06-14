import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      if (!state.items[product.id]) {
        state.items[product.id] = { ...product, quantity: 1 };
      } else {
        state.items[product.id].quantity += 1;
      }
      state.totalQuantity += 1;
      state.totalPrice += product.price;
    },
    increaseQuantity: (state, action) => {
      const id = action.payload;
      state.items[id].quantity += 1;
      state.totalQuantity += 1;
      state.totalPrice += state.items[id].price;
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      if (state.items[id].quantity > 1) {
        state.items[id].quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= state.items[id].price;
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.totalQuantity -= state.items[id].quantity;
      state.totalPrice -= state.items[id].price * state.items[id].quantity;
      delete state.items[id];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;

