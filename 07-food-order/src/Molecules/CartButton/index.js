import classes from "./CartButton.module.css";
import CartIcon from "../../atoms/CartIcon";
import CartContext from "../../store/cart-context";
import { useContext, useEffect, useState } from "react";

const CartButton = (props) => {
  const [isButtonAnimated, setIsButtonAnimated] = useState(false);
  const buttonClass = `${classes.button} ${isButtonAnimated && classes.bump}`;
  const cartctx = useContext(CartContext);
  useEffect(() => {
    if (cartctx.items.length > 0) {
      setIsButtonAnimated(true);
      const timer = setTimeout(() => {
        setIsButtonAnimated(false);
      }, 300);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [cartctx.items]);

  const numberOfCartItems = cartctx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);
  return (
    <button className={buttonClass} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;
