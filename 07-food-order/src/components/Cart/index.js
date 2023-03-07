import classes from "./Cart.module.css";
import Modal from "../../Molecules/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "../../atoms/CartItem";

const Cart = (props) => {
  const cartctx = useContext(CartContext);
  const addItemHandler = (item) => {
    cartctx.addItem({...item,amount:1})
  };
  const removeItemHandler = (id) => {
    cartctx.removeItem(id);
  };
  const items = (
    <ul className={classes["cart-items"]}>
      {cartctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={removeItemHandler.bind(null,item.id)}
          onAdd={addItemHandler.bind(null,item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onHideCart}>
      {items}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{"$" + cartctx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {cartctx.items.length > 0 && (
          <button className={classes.button}>Order</button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
