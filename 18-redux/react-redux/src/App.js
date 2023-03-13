import Counter from "./components/Counter";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";
import Auth from "./components/Auth";
function App() {
  const isLoggedin = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      <Header />
      {isLoggedin ? <UserProfile /> : <Auth />}
      <Counter />
    </>
  );
}

export default App;
