import { createContext, useState } from "react";

const ProductContext = createContext({
  products: [],
  toggleFav: () => {},
});

export const ProductProvider = (props) => {
  const [productList, setProductList] = useState([
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
  const toggleFav=(productId)=>{
    setProductList(prev=>{
      const prodIndex = prev.findIndex(
        p => p.id === productId
      );
      const newFavStatus = !prev[prodIndex].isFavorite;
      const updatedProducts = [...prev];
      updatedProducts[prodIndex] = {
        ...prev[prodIndex],
        isFavorite: newFavStatus
      };
      return updatedProducts;
    })
  }
  return (
    <ProductContext.Provider
      value={{
        products: productList,
        toggleFav:toggleFav,
        
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
