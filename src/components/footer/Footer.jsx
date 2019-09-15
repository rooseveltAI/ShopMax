import React from "react";
import logo_dark from "../../logo_dark.svg";

import "./footer.scss";

export default function Footer() {
  return (
    <div className="footer-bg">
      <img src={logo_dark} alt="Logo" />
      <div className="f1">
        <div>
          <h3>Categories</h3>
          <p>Women</p>
          <p>Men</p>
          <p>All Products</p>
        </div>

        <div>
          <h3>Help</h3>
          <p>Shipping</p>
          <p>Returns</p>
          <p>FAQ's</p>
        </div>
      </div>

      <h2>GET IN TOUCH</h2>
      <p>
        Any questions? Let us know by calling us with this number (+234)
        8064787395
      </p>

      <h2>NEWSLETTER</h2>
      <form>
        <input type="text" name="" id="" placeholder="mail@marv.com" />
        <button className="button blue-button">Subscribe</button>
      </form>

      <p>
        Copyright ©2019 All rights reserved | Designed by Roosevelt Innocent
      </p>
    </div>
  );
}
