import "./header.css";
import { cartSvg, helpSvg, logoSvg, signinSvg } from "../../assets/svgs/header-svg";
const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="main-nav">
          <ul>
            <li>
              {logoSvg}
            </li>
            <li>
              <span className="hover-orange hover-underline">Set location</span>
            </li>
            <li>
              <span className="faded">Click to choose location </span>
              <span className="arrow"> </span>
            </li>
          </ul>
          <ul className="nav-items">
            <li>
              <span>
                {helpSvg}
              </span>
              { } Help
            </li>
            <li>
              {signinSvg}
              { } Sign in
            </li>
            <li>
              {cartSvg}
              { }Cart
            </li>
          </ul>
        </nav>
      </header>
      <div className="address">
        <span>Home</span> / <span>Bangalore</span> /
        <span>Bannerghatta Main Road</span> /<span>Kitchens of Punjab</span>
      </div>
    </>
  );
};

export default Header;
