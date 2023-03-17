import React from "react";
const renderCart=(cartItems,removeCartHandler,addCartHandler)=>{
    return cartItems.map((item) => {
        return (
          <React.Fragment key={item.id}>
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
          </React.Fragment>
        );
      })
}

export default renderCart;