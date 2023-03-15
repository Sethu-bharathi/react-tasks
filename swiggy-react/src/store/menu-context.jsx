import { menuData } from "../components/Menu/menuData";
import { createSlice } from "@reduxjs/toolkit";

// const MenuContext = createContext({ ...menuData.allCollections });
// const menuReducer = (state, action) => {
//   if (action.type === "FILTER_VEG") {
//   } else if (action.type === "SEARCH") {
//   }
//   return { ...menuData.allCollections };
// };

// export const MenuContextProvider = (props) => {
//   const toggleVegHandler = (isVeg) => {
//     dispatchMenu({ type: "FILTER_VEG", isVeg });
//   };
//   const serchHandler = (foodName) => {
//     dispatchMenu({ type: "SEARCH", foodName });
//   };
//   const [menuState, dispatchMenu] = useReducer(menuReducer, {
//     menu:menuData.allCollections,

//   });
//   return (
//     <MenuContext.Provider
//       value={{
//         ...menuState,
//         onSearch: serchHandler,
//         onToggle: toggleVegHandler,
//       }}
//     >
//       {props.children}
//     </MenuContext.Provider>
//   );
// };
// export default MenuContext;

const initialState = [...menuData.allCollections];
const foodItem = menuData.items;
let vegItems = null;
const menuSlice = createSlice({
  name: "menu",
  initialState: {
    items: initialState,
    isVeg: false,
  },
  reducers: {
    search: (state, action) => {
      state.items = searchItems(action.payload.searchText);
    },
    vegToggle: (state) => {
      state.isVeg = !state.isVeg;

      if (state.isVeg) {
        if (vegItems) state.items = vegItems;
        else {
          state.items = vegFilter(1);
        }
      } else {
        state.items = [...menuData.allCollections];
      }
    },
  },
});
const searchItems = (text) => {
  const menuItems = initialState.map((element) => {
    return {
      ...element,
      entities: element.entities
        ? element.entities.filter((item) => {
            const food = foodItem[item.id.toString()];
            return food.name.toUpperCase().indexOf(text.toUpperCase()) > -1;
          })
        : null,
      widgets: element.widgets
        ? element.widgets.map((widgetItem) => {
            return {
              ...widgetItem,
              entities: widgetItem.entities.filter((item) => {
                const food = foodItem[item.id.toString()];
                return food.name.toUpperCase().indexOf(text.toUpperCase()) > -1;
              }),
            };
          })
        : null,
    };
  });
  return menuItems;
};

const vegFilter = (isVeg) => {
  const menuItems = initialState.map((element) => {
    return {
      ...element,
      entities: element.entities
        ? element.entities.filter((item) => {
            const food = foodItem[item.id.toString()];
            console.log(food.isVeg, food.isVeg === isVeg);
            return food.isVeg;
          })
        : null,
      widgets: element.widgets
        ? element.widgets.map((widgetItem) => {
            return {
              ...widgetItem,
              entities: widgetItem.entities.filter((item) => {
                const food = foodItem[item.id.toString()];
                return food.isVeg;
              }),
            };
          })
        : null,
    };
  });
  console.log(menuItems);
  vegItems = menuItems;
  return menuItems;
};

//exports
export default menuSlice;
export const menuActions = menuSlice.actions;
