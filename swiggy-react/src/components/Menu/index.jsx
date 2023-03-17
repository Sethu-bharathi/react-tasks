import "./menu.css";
import Card from "../../Molecule/Card";
import { menuData } from "./menuData";
import { useInView } from "react-intersection-observer";
import Cart from "../../Molecule/Cart";
import { useSelector } from "react-redux";
import { useState, useRef } from "react";

const Menu = () => {
  const orangeRef = useRef();
  const menu = useSelector((state) => state.menu.items);
  const initalState = {};
  menu.forEach((element) => {
    initalState[element.name] = false;
  });
  const [isInview, setisInview] = useState(initalState);
  const setVisiblity = (name) => {
    const upgradedState = {};
    menu.forEach((element, index) => {
      if (element.name === name) {
        orangeRef.current.style.transform = `translateY(${index * 25}px)`;
      }
      upgradedState[element.name] = element.name === name;
    });
    setisInview({ ...upgradedState });
  };

  const { ref, inView, entry } = useInView({
    root: null,
    rootMargin: "-200px 0px",
    threshold: [1],
  });

  return (
    <section>
      <div className="food-container">
        <div className="flex-row sticky margin-left-50">
          <div className="food-nav">
            <div>
              {menu.map((items) => {
                return (
                  <div key={items.name} className={``}>
                    <a
                      className={`food-type ${
                        isInview[items.name] && "selected-fill"
                      }`}
                      href={"#" + items.name.replace(/[^A-Z0-9]/gi, "")}
                    >
                      {items.name}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="orange-indicator" ref={orangeRef}>
            <div>{}</div>
          </div>
        </div>
        <div className="food-menu">
          <div ref={ref}></div>
          {menu.map((menu, index) => {
            return (
              <Card
                setVisiblity={setVisiblity}
                totalData={menu}
                foodItem={menuData.items}
                key={menu.name}
              />
            );
          })}
        </div>
        <Cart />
      </div>
    </section>
  );
};

export default Menu;
