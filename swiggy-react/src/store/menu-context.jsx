import { createContext, useReducer } from "react";
import { menuData } from "../components/Menu/menuData";

const MenuContext = createContext({ ...menuData.allCollections });

const menuReducer = (state, action) => {
  if (action.type === "FILTER_VEG") {

  } else if (action.type === "SEARCH") {

  }
  return { ...menuData.allCollections };
};
export const MenuContextProvider = (props) => {
  const toggleVegHandler = (isVeg) => {
    dispatchMenu({ type: "FILTER_VEG", isVeg });
  };
  const serchHandler = (foodName) => {
    dispatchMenu({ type: "SEARCH", foodName });
  };
  const [menuState, dispatchMenu] = useReducer(menuReducer, {
    menu:menuData.allCollections,
    
  });
  return (
    <MenuContext.Provider
      value={{
        ...menuState,
        onSearch: serchHandler,
        onToggle: toggleVegHandler,
      }}
    >
      {props.children}
    </MenuContext.Provider>
  );
};
export default MenuContext;
