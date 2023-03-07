import React, { useReducer } from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});
const defaultcartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingItemIndex];
    let updatedItem, updatedItems, totalAmount;
    if (existingItem) {
      updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    totalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount,
    };
  } else if (action.type === "DELETE_ITEM") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingItemIndex];
    let updatedItem, updatedItems, totalAmount;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      updatedItem = {
        ...existingItem,
        amount: (existingItem.amount -= 1),
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }
    totalAmount = state.totalAmount - existingItem.price;
    return {
      items: updatedItems,
      totalAmount,
    };
  }
  return defaultcartState;
};
export const CartContextProvider = (props) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, defaultcartState);
  const addItemHandler = (item) => {
    cartDispatch({ type: "ADD_ITEM", item: item });
  };
  const removeitemHandler = (id) => {
    cartDispatch({ type: "DELETE_ITEM", id });
  };
  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeitemHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContext;
