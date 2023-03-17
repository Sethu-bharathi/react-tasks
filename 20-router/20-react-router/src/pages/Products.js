import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <h2>Products</h2>
      <ul>
        <li>
          <Link to="product1" relative="route">Product 1</Link>
        </li>
        <li>
          <Link to="product2">Product 2</Link>
        </li>
        <li>
          <Link to="product3">Product 3</Link>
        </li>
      </ul>
    </>
  );
};

export default Products;
