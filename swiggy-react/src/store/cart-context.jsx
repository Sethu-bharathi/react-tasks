import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      state.totalQuantity++;
      state.totalAmount += newItem.price;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          isVeg: newItem.isVeg,
          totalPrice: newItem.price,
          name: newItem.name,
        });
      } else {
        existingItem.quantity += 1;
        existingItem.totalPrice += existingItem.price;
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      existingItem.totalPrice -= existingItem.price;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity -= 1;
      }
      state.totalQuantity--;
      state.totalAmount -= existingItem.price;
    },
    resetCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
      state.totalPrice = 0;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
