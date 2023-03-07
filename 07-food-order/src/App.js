import Header from "./components/Header";
import Meals from "./components/Meals";
import Cart from "./components/Cart";
import { useState } from "react";
import { CartContextProvider } from "./store/cart-context";

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const showCartHandler=()=>{
    setCartIsVisible(true)
  }
  const hideCartHandler=()=>{
    setCartIsVisible(false)
  }
  return (
    <CartContextProvider>
      {cartIsVisible && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartContextProvider>
  );
}

export default App;
