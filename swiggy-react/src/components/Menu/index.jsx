import "./menu.css";
import Card from "../../Molecule/Card";
import { menuData } from "./menuData";
import { useContext } from "react";
import MenuContext from "../../store/menu-context";
import { useInView } from 'react-intersection-observer';
import Cart from "../../Molecule/Cart";

const Menu = () => {
  const { ref, inView, entry } = useInView({
    
      root: null,
      rootMargin: "-200px 0px",
      threshold: [1],
    }
  );
  const  menuCtx=useContext(MenuContext);
  return (
    <section>
      <div className="food-container">
        <div className="flex-row sticky margin-left-50">
          <div className="food-nav">
            <div>{menuCtx.menu.map(items=><p key={items.name}>{items.name}</p>)}</div>
          </div>
          <div className="orange-indicator">
            <div>{}</div>
          </div>
        </div>
        <div className="food-menu">
          <div ref={ref}></div>
          {menuData.allCollections.map((menu) => {
            return <Card totalData={menu} foodItem={menuData.items} key={menu.name}/>;
          })}
        </div>
        <Cart />
      </div>
    </section>
  );
};

export default Menu;
