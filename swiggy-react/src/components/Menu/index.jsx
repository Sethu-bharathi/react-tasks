import "./menu.css"

const Menu=()=>{
    return <section>
    <div className="food-container">
      <div className="flex-row sticky margin-left-50">
        <div className="food-nav">
          <div>
            
          </div>
        </div>
        <div className="orange-indicator">
          <div></div>
        </div>
      </div>
      <div className="food-menu">
        <div>
          <h3 className="catagory">Recommended</h3>
          <h5 className="total">21 items</h5>
          <div className="menu-card">
            <div>
              <div className="icon veg">
                <div></div>
              </div>
              <h3 className="f-name">Shahi Chicken Tikka Patiala</h3>
              <p className="f-cost">₹ 299</p>
              <p className="f-description faded">
                Spicy chicken tikka prepped patiala-style.
              </p>
            </div>
            <button className="relative pointer" width="118"
            height="96">
              <img
                className="food-img"
                loading="lazy"
                width="118"
                height="96"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/nkmuaaqvmyxu4jwr3txi"
                alt=""
              />
              <div className="add">ADD</div>
            </button>
          </div>
        </div>
        <div className="line"></div>
      </div>
      <div className="flex-row sticky">
        <div className="food-nav">
          <div>Cart empty</div>
        </div>
      </div>
    </div>
  </section>
}

export default Menu;