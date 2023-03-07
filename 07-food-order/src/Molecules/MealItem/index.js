import classes from "./MealItem.module.css"
import MealItemForm from "../MealItemForm.js";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const MealItem = (props) => {
  const cartctx=useContext(CartContext);
  const addToCart=(amount)=>{
    cartctx.addItem({
      id:props.id,
      name:props.name,
      amount,
      price:props.price
    })
  }
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.desc}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCart}/>
      </div>
    </li>
  );
};

export default MealItem;
