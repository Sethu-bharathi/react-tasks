import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorElement from "./components/ErrorElement";
import ProductDesciprition from "./components/ProductDescription";

const router = createBrowserRouter([
  {
    path: "/root",
    element: <RootLayout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "products", element: <Products /> },
      { path: "products/:id", element: <ProductDesciprition /> },
    ],
    errorElement: <ErrorElement />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
