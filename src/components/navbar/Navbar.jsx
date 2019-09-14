import React from "react";
import cart from "../../images/shopping-cart-outline.svg";
import Icon from "react-eva-icons";
import logoLight from "../../logo_light.svg";

import "./navbar.scss";

export default function Navbar() {
  return (
    <div className="nav--container">
      <nav className="nav">
        <img width="165" src={logoLight} alt="Logo" />
        <img
          className="cart"
          width="24px"
          height="24px"
          src={cart}
          alt="cart"
        />
        <Icon
          name="menu"
          size="medium"
          fill="#000" // small, medium, large, xlarge
        />
      </nav>
      <hr />
    </div>
  );
}
