import classes from "./MealItemForm.module.css";
import Input from "../../atoms/Input";
import { useContext,useRef } from "react";
import CartContext from "../../store/cart-context";

const MealItemForm = (props) => {
  const amountRef=useRef();
  const cartctx=useContext(CartContext);
  const submitHandler=(event)=>{
    event.preventDefault();
    const amountString=amountRef.current.value;
    if(amountString.trim().length===0)return;
    props.onAddToCart(+amountString);
  }
  
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
      ref={amountRef}
      label="Amount"
        input={{
          id: "amount"+props.id,
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button type="submit">+Add</button>
    </form>
  );
};

export default MealItemForm;
