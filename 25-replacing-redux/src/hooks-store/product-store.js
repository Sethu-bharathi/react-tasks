import { initStore } from "./store";

const configureStore = () => {
  const action = {
    TOGGLE_FAV: (curState, productId) => {
      const prodIndex = curState.findIndex((p) => p.id === productId);
      const newFavStatus = !curState[prodIndex].isFavorite;
      const updatedProducts = [...curState];
      updatedProducts[prodIndex] = {
        ...curState[prodIndex],
        isFavorite: newFavStatus,
      };
      return { products: updatedProducts };
    },
  };
  initStore([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);
};

export default configureStore;
