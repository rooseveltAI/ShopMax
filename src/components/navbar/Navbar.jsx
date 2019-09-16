import React from "react";
import { Link } from "react-router-dom";
import cart from "../../images/shopping-cart-outline.svg";
import Icon from "react-eva-icons";
import logoLight from "../../logo_light.svg";

import "./navbar.scss";

export default function Navbar() {
  return (
    <div className="nav--container">
      <nav className="nav">
        <Link to="/">
          <img width="165" src={logoLight} alt="Logo" />
        </Link>

        <Link className="cart" to="/cart">
          <img width="24px" height="24px" src={cart} alt="cart" />
        </Link>
        <Icon
          name="menu"
          size="medium"
          fill="#000" // small, medium, large, xlarge
        />
      </nav>

      <svg
        className="nav--line"
        width="375"
        height="2"
        viewBox="0 0 375 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 1L375 1.00003" stroke="#BDBBCD" strokeWidth="0.5" />
      </svg>
    </div>
  );
}
