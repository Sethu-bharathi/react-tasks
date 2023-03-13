import {configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import counterSclice from "./counter";
// const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
//   if (action.type === "INCREMENT")
//     return {
//         ...state,
//       counter: state.counter + 1,
//     };
//   else if (action.type === "DECREMENT") {
//     return {
//       ...state,
//       counter: --state.counter,
//     };
//   } else if (action.type === "INCREMENT_BY_VAL") {
//     return {
//       ...state,
//       counter: state.counter + action.value,
//     };
//   } else if (action.type === "TOGGLE") {
//     return {
//       ...state,
//       showCounter: !state.showCounter,
//     };
//   }
//   return state;
// };


const store = configureStore({
  reducer: { counter: counterSclice.reducer, auth: authSlice.reducer },
});



store.subscribe(() => {
  console.log(store.getState());
});
export default store;
