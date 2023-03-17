import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/Home";
import ThankYou from "./Pages/ThankYou";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "thank-you",
          element: <ThankYou />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
