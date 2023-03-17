import MenuItem from "../../Atoms/menuItem";
import React, { useEffect, useRef } from "react";
const Card = (props) => {
  const targetRef = useRef();
  useEffect(() => {
    const navObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting === true) {
          props.setVisiblity(props.totalData.name);
        }
      },
      { threshold: [0.15], rootMargin: "-180px 0px 0px 0px" }
    );
    navObserver.observe(targetRef.current);
  }, []);

  const element = props.totalData;
  return (
    <>
      <div id={element.name.replace(/[^A-Z0-9]/gi, "")}>
        <h3 className="catagory" ref={targetRef}>
          {element.name}
        </h3>
        {element.entities ? (
          <>
            <h5 className="total">{element.entities.length} Items</h5>
            <div className="u-underline"></div>
            {element.entities.map((item) => {
              const food = props.foodItem[item.id.toString()];
              return (
                <MenuItem
                  id={item.id}
                  key={item.id.toString() + element.name}
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
                <div
                  id={widgetItem.name.replace(/[^A-Z0-9]/gi, "")}
                  key={widgetItem.name.replace(/[^A-Z0-9]/gi, "")}
                >
                  <h3 className="catagory">{widgetItem.name}</h3>
                  <h5 className="total">{widgetItem.entities.length} Items</h5>
                  <div className="u-underline"></div>
                  {widgetItem.entities.map((item) => {
                    const food = props.foodItem[item.id.toString()];
                    return (
                      <React.Fragment key={item.id.toString() + element.name}>
                        <MenuItem
                          key={item.id.toString() + element.name}
                          isVeg={food.isVeg}
                          name={food.name}
                          price={food.price}
                          description={food.description}
                          image={food.cloudinaryImageId}
                        />
                        <div className="line"></div>
                      </React.Fragment>
                    );
                  })}
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default Card;
