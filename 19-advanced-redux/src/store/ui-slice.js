import {createSlice } from "@reduxjs/toolkit"

const uiSlice=createSlice({
    name:"cart",
    initialState:{
        cartIsVisible:false,
    },
    reducers:{
        toogleCartVisiblity:(state)=>{
            state.cartIsVisible=!state.cartIsVisible
        }
    }
})

export const uiActions=uiSlice.actions;
export default  uiSlice;