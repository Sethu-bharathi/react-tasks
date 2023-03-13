import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "Authentication",
    initialState: {
      isAuthenticated: false,
    },
    reducers: {
      login: (state) => {
        state.isAuthenticated = true;
      },
      logout: (state) => {
        state.isAuthenticated = false;
      },
    },
  });


  export const authAction=authSlice.actions;
  export default authSlice