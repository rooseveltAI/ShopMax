import React from "react";
import { Link } from "react-router-dom";
import cart from "../../images/shopping-cart-outline.svg";
import Icon from "react-eva-icons";
import searchIcon from '../../images/search.svg'
import logoLight from "../../logo_light.svg";

import "./navbar.scss";

export default function Navbar() {
  return (
    <div className="nav--container">
      <nav className="nav">
        <li>
          <Link to="/">Products</Link>
        </li>
        <li className="second--child">
          <Link to="/">Men</Link>
        </li>
        <li>
          <Link to="/">Women</Link>
        </li>

        <Link to="/" className="logo">
          <img width="165" src={logoLight} alt="Logo" />
        </Link>

        <li className="last--child">
          <Link to="/">My Account</Link>
        </li>
        {/* <svg
          width="1"
          height="44"
          viewBox="0 0 1 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.25"
            y1="1.09278e-08"
            x2="0.249998"
            y2="44"
            stroke="black"
            stroke-width="0.5"
          />
        </svg> */}

        <Link className="cart" to="/cart">
          <img width="24px" height="24px" src={cart} alt="cart" />
        </Link>

        <img width="24px" height="24px" className="search--icon" src={searchIcon} alt="search"/>

        <i className="menu">
          <Icon
            name="menu"
            size="medium"
            fill="#000" // small, medium, large, xlarge
          />
        </i>
      </nav>
      <div className="nav--line"></div>
    </div>
  );
}
