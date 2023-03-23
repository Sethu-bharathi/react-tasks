import { cartActions } from "../../store/cart-context";
import { useSelector, useDispatch } from "react-redux";

const MenuItem = (props) => {
  const cart = useSelector((state) => state.cart);
  if (!props.id) {
    console.log(props.id,props.name);
  }
  const existingCartItem = cart.items.find((item) => item.id === props.id);
  const dispatch = useDispatch();
  const addCartHandler = () => {
    dispatch(cartActions.addItem({ ...props }));
  };
  const removeCartHandler = (item) => {
    dispatch(cartActions.removeItem(item.id));
  };
  return (
    <div className="menu-card">
      <div>
        <div className={`icon ${props.isVeg ? "veg" : "non-veg"}`}>
          <div></div>
        </div>
        <h3 className="f-name">{props.name}</h3>
        <p className="f-cost">₹ {Math.round(props.price / 100)}</p>
        <p className="f-description faded">{props.description}</p>
      </div>
      <button className="relative pointer flex" width="118" height="96">
        {props.image !== "" ? (
          <img
            className="food-img"
            loading="lazy"
            width="118"
            height="96"
            src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${props.image}`}
            alt=""
          />
        ) : (
          <div className="food-img"></div>
        )}
        {existingCartItem ? (
          <div className="add">
            <ul className="add-cart1">
              <li>
                <button
                  onClick={removeCartHandler.bind(null, existingCartItem)}
                >
                  -
                </button>
              </li>
              <li>
                {" "}
                <button className="fa-green">
                  {existingCartItem.quantity}
                </button>
              </li>
              <li>
                <button
                  onClick={addCartHandler.bind(null, existingCartItem)}
                  className="fa-green"
                >
                  +
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="add" onClick={addCartHandler}>
            ADD
          </div>
        )}
      </button>
    </div>
  );
};
export default MenuItem;
