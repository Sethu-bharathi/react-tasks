import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-context";
import menuSlice from "./menu-context";

const store = configureStore({
  reducer: { cart: cartSlice.reducer, menu: menuSlice.reducer },
});
store.subscribe((state) => console.log(store.getState()));
export default store;
