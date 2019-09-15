import React, { Component } from "react";
import HeroImage from "../header/HeroHeader";
import Product from "../product/Product";

import "./productlist.scss";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <HeroImage />
        <div className="plist--h1">
          <svg
            width="30"
            height="1"
            viewBox="0 0 30 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="0.5" x2="30" y2="0.5" stroke="#606558" />
          </svg>

          <h1>Latest Products</h1>
        </div>
        <Product />
      </div>
    );
  }
}
