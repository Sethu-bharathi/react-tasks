import {createSlice } from "@reduxjs/toolkit"

const uiSlice=createSlice({
    name:"cart",
    initialState:{
        cartIsVisible:false,
        notification:null
    },
    reducers:{
        toogleCartVisiblity:(state)=>{
            state.cartIsVisible=!state.cartIsVisible
        },
        setNotification:(state,action)=>{
            state.notification={...action.payload}
        }
    }
})

export const uiActions=uiSlice.actions;
export default  uiSlice;