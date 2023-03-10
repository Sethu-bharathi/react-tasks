import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./components/store/auth-context";

function App() {
  const authctx=useContext(AuthContext);
  return (
    <>
      <MainHeader/>
      <main>
        {!authctx.isLoggedIn && <Login/>}
        {authctx.isLoggedIn && <Home/>}
      </main>
    </>
  );
}

export default App;
