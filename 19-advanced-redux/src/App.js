import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Notification from "./components/UI/Notification";
import { uiActions } from "./store/ui-slice";

function App() {
  const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const senDItems = async () => {
      dispatch(
        uiActions.setNotification({
          status: "Pending",
          title: "Sending",
          message: "Data is being sent",
        })
      );
      const response = await fetch(
        "https://wind-turbine-power-predictor-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      dispatch(
        uiActions.setNotification({
          status: "success",
          title: "Success",
          message: "Data sent successfully",
        })
      );
    };
    senDItems().catch((error) => {
      dispatch(
        uiActions.setNotification({
          status: "error",
          title: "Error!",
          message: "Data couldn't be sent",
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <>
      {notification && <Notification {...notification} />}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
