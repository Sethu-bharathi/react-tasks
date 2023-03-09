import MenuItem from "../../Atoms/menuItem";

const Card = (props) => {
  const element = props.totalData;
  return (
    <>
      <div id={element.name.replace(/[^A-Z0-9]/gi, "")}>
        <h3 className="catagory">{element.name}</h3>
        {element.entities ? (
          <>
            <h5 className="total">{element.entities.length} Items</h5>
            <div className="u-underline"></div>
            {element.entities.map((item) => {
              const food = props.foodItem[item.id.toString()];
              return (
                <MenuItem
                isVeg={food.isVeg}
                  name={food.name}
                  price={food.price}
                  description={food.description}
                  image={food.cloudinaryImageId}
                />
              );
            })}
          </>
        ) : (
          <>
            {element.widgets.map((widgetItem) => {
              return (
                <div id={widgetItem.name.replace(/[^A-Z0-9]/gi, "")}>
                  <h3 className="catagory">{widgetItem.name}</h3>
                  <h5 className="total">{widgetItem.entities.length} Items</h5>
                  <div className="u-underline"></div>
                  {widgetItem.entities.map((item) => {
                    const food = props.foodItem[item.id.toString()];
                    return (
                      <MenuItem
                      isVeg={food.isVeg}
                        name={food.name}
                        price={food.price}
                        description={food.description}
                        image={food.cloudinaryImageId}
                      />
                    );
                  })}
                </div>
              );
            })}
          </>
        )}
      </div>
      <div className="line"></div>
    </>
  );
};

export default Card;
