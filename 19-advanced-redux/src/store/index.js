import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import uiSlice from "./ui-slice";
const store=configureStore({reducer:{
    ui:uiSlice.reducer,
    cart:cartSlice.reducer
}})

store.subscribe(()=>{
    console.log(store.getState());
})
export default store;