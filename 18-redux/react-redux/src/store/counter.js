import { createSlice } from "@reduxjs/toolkit";

const counterSclice = createSlice({
    name: "counter",
    initialState: { counter: 0, showCounter: true },
    reducers: {
      increment: (state) => {
        state.counter += 1;
      },
      decrement: (state) => {
        state.counter -= 1;
      },
      toggle: (state) => {
        console.log(state.showCounter, "clicked");
        state.showCounter = !state.showCounter;
      },
      incrementAmount: (state, action) => {
        state.counter += action.payload;
      },
    },
  });

  export const counterActions = counterSclice.actions;
  export default counterSclice;