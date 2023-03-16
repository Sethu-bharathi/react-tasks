import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
    changed: false,
  },
  reducers: {
    replaceCart: (state, action) => {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
      state.totalAmount = action.payload.totalAmount;
    },
    addItem: (state, action) => {
      const newItem = action.payload;
      state.changed = true;
      state.totalQuantity++;
      state.totalAmount += newItem.price;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity += 1;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeItem: (state, action) => {
      state.changed = true;
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity -= 1;
      }
      state.totalQuantity--;
      state.totalAmount -= existingItem.price;
    },
  },
});

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      dispatch(
        uiActions.setNotification({
          status: "Pending",
          title: "Sending",
          message: "Data is being sent",
        })
      )
    );
    const sendReq = async () => {
      const response = await fetch(
        "https://wind-turbine-power-predictor-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
    };
    try {
      await sendReq();
      dispatch(
        uiActions.setNotification({
          status: "success",
          title: "Success",
          message: "Data sent successfully",
        })
      );
    } catch (e) {
      dispatch(
        uiActions.setNotification({
          status: "error",
          title: "Error!",
          message: "Data couldn't be sent",
        })
      );
    }
  };
};
export const fetchCartData = () => {
  return async (dispatch) => {
    dispatch(
      uiActions.setNotification({
        status: "Pending",
        title: "Fetching",
        message: "Data is being fetched",
      })
    );
    try {
      const fetchData = await fetch(
        "https://wind-turbine-power-predictor-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
      );
      const data = await fetchData.json();
      dispatch(
        uiActions.setNotification({
          status: "Success",
          title: "Sucess",
          message: "Data is fetched succesfully",
        })
      );
      dispatch(cartActions.replaceCart({ ...data, items: data.items || [] }));
    } catch (e) {
      dispatch(
        uiActions.setNotification({
          status: "error",
          title: "Error!",
          message: "Data couldn't be sent",
        })
      );
    }
  };
};

export const cartActions = cartSlice.actions;
export default cartSlice;
