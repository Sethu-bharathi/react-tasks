import { useState } from "react";
import discountImage from "../../assets/images/icons8-discount-30 (3).png"

const RestaurantHero = () => {
  const [searchText, setSearchText] = useState("");
  const searchHandler=(e)=>{
    setSearchText(e.target.value)
  }
  return (
    <section className="container">
      <img
        className="main-img"
        width="254"
        height="165"
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/y2y8vkvvgpdu4nkxx5uj"
        alt="Swiggy"
        srcSet=""
      />
      <div className="restaurant">
        <h2>Kitchens of Punjab</h2>
        <p className="faded">Punjabi, North Indian</p>
        <p className="faded">Bilekahalli, Bannerghatta Main Road</p>
        <div className="card">
          <div className="vr" style={{paddingLeft: "5px"}}>
            <i className="fi fi-star-full"></i>
            <h3 className="inline">4.0</h3>
            <p className="rating">500+ Ratings</p>
          </div>
          <div className="vr">
            <h3 className="inline">-- mins</h3>
            <p className="rating">Delivery Time</p>
          </div>
          <div>
            <h3 className="inline">₹ 500</h3>
            <p className="rating">Cost for two</p>
          </div>
        </div>
        <div className="flex-row-reverse filters">
          <div>
            <i className="fi fi-search black"></i>
            <input
              id="search"
              type="search"
              value={searchText}
              onChange={searchHandler}
              placeholder="Search for dishes..."
            />
          </div>
          <div>
            <span>
              <span className="checkbox-span">
                <label>
                  <input
                    type="checkbox"
                    className="checkbox"
                    onClick="toggleveg()"
                    value=""
                  />
                  <span className="border-holder"></span>
                  <svg
                    width="16"
                    className="checkbox-green"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M9.5,18.25 L20.75,7.43269231 L19,5.75 L9.5,14.8846154 L5,10.5576923 L3.25,12.2403846 L9.5,18.25 Z"></path>
                  </svg>
                </label>
              </span>
            </span>
            Veg Only
          </div>
          <div>
            <i className="fi fi-heart-line" style={{color: "#000"}}></i>
            Favorite
          </div>
        </div>
      </div>
      <div className="offers">
        <h4>OFFER</h4>
        <div>
          <img
            src="src/assets/images/icons8-discount-30 (3).png"
            alt="Discount"
            srcSet=""
          />
          <span>
            50% off up to ₹100 | Use code
            <br />
            WELCOME50
          </span>
        </div>
        <div>
          <img
            src={discountImage}
            alt="Discount"
            srcSet=""
          />
          <span>FLAT150 off | Use VDAY</span>
        </div>
      </div>
    </section>
  );
};

export default RestaurantHero;
