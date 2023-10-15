import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src="data:image/png;base64,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" alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Log In / Registration
        </a>
        <div />
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#menu" onClick={() => setToggleMenu(false)}>
                  Menu
                </a>
              </li>
              <li>
                <a href="#awards" onClick={() => setToggleMenu(false)}>
                  Awards
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
