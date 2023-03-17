import { useSelector, useDispatch } from "react-redux";
import "./cart.css";
import { cartActions } from "../../store/cart-context";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import renderCart from "./Helpers/renderCart";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const addCartHandler = (item) => {
    dispatch(cartActions.addItem({ ...item }));
  };
  const removeCartHandler = (item) => {
    dispatch(cartActions.removeItem(item.id));
  };
  const [ordered, setOrdered] = useState({});
  useEffect(() => {
    setOrdered(
      JSON.parse(window.localStorage.getItem("ordered")) ?? {
        user: "sethu",
        orderHistory: [],
      }
    );
  }, []);
  const checkout = () => {
    console.log(ordered.orderHistory);
    ordered.orderHistory.push({
      ...cart,
      time: new Date(Date.now()).toUTCString(),
    });
    dispatch(cartActions.resetCart());
    setTimeout(() => {
      try {
        localStorage.setItem("ordered", JSON.stringify(ordered));
        navigate("/thank-you");
      } catch (e) {
        console.log(e.message);
      }
    }, 0);
  };
  return (
    <>
      <div className="flex-row sticky cart">
        <div>
          <div className="catagory">Cart</div>
          <div className="cart-items">
            {cart.items.length ? (
              <>
                <div className="total">{cart.items.length} items</div>
                {renderCart(cart.items, removeCartHandler, addCartHandler)}
                <div className="total-cost">
                  <h3>Subtotal</h3>
                  <p>₹{Math.round(cart.totalAmount / 100)}</p>
                </div>
                <p className="extra-charges">Extra charges may apply</p>
                <button className="checkout-btn pointer" onClick={checkout}>
                  CHECKOUT →
                </button>
              </>
            ) : (
              <div>Cart empty</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
