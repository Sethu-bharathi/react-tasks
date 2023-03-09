const MenuItem = (props) => {
  return (
    <div className="menu-card">
      <div>
        <div className={`icon ${props.isVeg ? "veg" : "non-veg"}`}>
          <div></div>
        </div>
        <h3 className="f-name">{props.name}</h3>
        <p className="f-cost">₹ {Math.round(props.price / 100)}</p>
        <p className="f-description faded">{props.description}</p>
      </div>
      <button className="relative pointer flex" width="118" height="96">
        {props.image !== "" ? (
          <img
            className="food-img"
            loading="lazy"
            width="118"
            height="96"
            src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${props.image}`}
            alt=""
          />
        ) : (
          <div className="food-img"></div>
        )}
        <div className="add">ADD</div>
      </button>
    </div>
  );
};
export default MenuItem;
