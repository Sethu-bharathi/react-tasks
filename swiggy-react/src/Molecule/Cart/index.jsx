import { useSelector, useDispatch } from "react-redux";
import "./cart.css";
import { cartActions } from "../../store/cart-context";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const addCartHandler = (item) => {
    dispatch(cartActions.addItem({ ...item }));
  };
  const removeCartHandler = (item) => {
    dispatch(cartActions.removeItem(item.id));
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
                {cart.items.map((item) => {
                  return (
                    <>
                      <div className="flex-row align-center">
                        <div
                          className={`icon ${item.isVeg ? "veg" : "non-veg"}`}
                        >
                          <div></div>
                        </div>
                        <h3>{item.name}</h3>
                        <ul className="add-cart">
                          <li>
                            <button
                              onClick={removeCartHandler.bind(null, item)}
                            >
                              -
                            </button>
                          </li>
                          <li>
                            {" "}
                            <button className="fa-green">
                              {item.quantity}
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={addCartHandler.bind(null, item)}
                              className="fa-green"
                            >
                              +
                            </button>
                          </li>
                        </ul>
                        <p className="amount">
                          ₹{Math.round(item.totalPrice / 100)}
                        </p>
                      </div>
                    </>
                  );
                })}
                <div className="total-cost">
                  <h3>Subtotal</h3>
                  <p>₹{Math.round(cart.totalAmount / 100)}</p>
                </div>
                <p className="extra-charges">Extra charges may apply</p>
                <button
                  className="checkout-btn pointer"
                  onClick="completeOrder()"
                >
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
