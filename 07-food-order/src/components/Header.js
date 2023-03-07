import mealImage from "../assets/images/meals.jpg"
import CartButton from "../Molecules/CartButton";
import classes from "./Header.module.css"
const Header = (props) => {
  return <>
  <header className={classes.header}>
    <h3>React meal</h3>
    <CartButton onClick={props.onShowCart}/>
    </header>
    <div className={classes["main-image"]}>
        <img src={mealImage} alt="Meal"  /></div></>;
};

export default Header;
