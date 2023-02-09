import React, { useState } from "react";
import { Link } from "react-router-dom";
//local imports
import Button from "../Button/Button";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [menu, setMenu] = useState(true);

  const barHandler = () => setClick(!click);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  const showMenu = () => {
    if (window.innerWidth <= 960) {
      setMenu(true);
      console.log("wow");
    } else {
      setMenu(false);
    }
  };
  window.addEventListener("resize", showButton);
  window.addEventListener("resize", showMenu);
  return (
    <div className="navbar">
      <div className="navbar_container">
        <Link to={"/"}>TRVL</Link>
        {menu && (
          <div className="menu_icon" onClick={barHandler}>
            {click ? (
              <i className="fa-solid fa-x"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </div>
        )}
        <ul className={click ? "nav_menu active" : "nav_menu"}>
          <li className="menu_item">
            <Link to={"/"} className="menu_links" onClick={barHandler}>
              Home
            </Link>
          </li>
          <li className="menu_item">
            <Link to={"/services"} className="menu_links" onClick={barHandler}>
              Services
            </Link>
          </li>
          <li className="menu_item">
            <Link to={"/products"} className="menu_links" onClick={barHandler}>
              Products
            </Link>
          </li>
          <li className="menu_item">
            {menu ? (
              <Link
                to={"/signup"}
                className="menu_links_mobile"
                onClick={barHandler}
              >
                Sign Up
              </Link>
            ) : (
              button && <Button buttonStyle="btn--outlined">SIGN UP</Button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
