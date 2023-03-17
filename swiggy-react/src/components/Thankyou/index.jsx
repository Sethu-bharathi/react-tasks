import React from "react";
import styles from "./Thankyou.module.css";
import OrderTracking from "../../assets/images/swiggy-ordered.jpeg";
import stopWatch from "../../assets/images/stopwatch.png";
const ThankYouComponent = () => {
  const ordered = JSON.parse(localStorage.getItem("ordered"));
  const cart = ordered.orderHistory.slice(-1)[0];
  console.log(cart);
  return (
    <>
    
      <div className={styles["thank-you"]}>
        <div className={styles["order-image"]}>
          <img src={OrderTracking} alt="Your order Tracking" height="500" />
        </div>
        <div className={styles["left-container"]}>
          <div className={styles["cart-items"]}>
            <>
              <div className="total">{cart.items.length} items</div>
              {cart.items.map((item) => {
                return (
                  <React.Fragment key={item.id}>
                    <div className="flex-row align-center">
                      <div className={`icon ${item.isVeg ? "veg" : "non-veg"}`}>
                        <div></div>
                      </div>
                      <h3>{item.name}</h3>
                      <p className="amount">
                        ₹{Math.round(item.totalPrice / 100)}
                      </p>
                    </div>
                  </React.Fragment>
                );
              })}
              <div className="total-cost">
                <h3>Subtotal</h3>
                <p>₹{Math.round(cart.totalAmount / 100)}</p>
              </div>
            </>
          </div>
          <p className={styles["thankyou-text"]}>THANK YOU FOR ORDERING</p>
          <div className={styles["prepare-order"]}>
            <img src={stopWatch} alt="" srcset="" />
            <p>Your Restaurant is preparing your order order</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYouComponent;
