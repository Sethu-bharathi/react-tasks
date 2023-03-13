import {configureStore} from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";

const store=configureStore({reducer:{
    ui:uiSlice.reducer
}})

store.subscribe(()=>{
    console.log(store.getState());
})
export default store;