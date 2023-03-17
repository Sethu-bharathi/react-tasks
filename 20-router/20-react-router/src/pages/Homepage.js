import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h2>Home</h2>
      <div>
        <Link to="products">Go to products</Link>
      </div>
    </>
  );
}

export default HomePage;
