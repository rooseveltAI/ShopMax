import React, { Component } from "react";
import img1 from "../../images/product_one.png";
import img2 from "../../images/product_two.png";

import "./product.scss";
export default class Product extends Component {
  render() {
    return (
      <div className="product-img__container">
        <div>
          <img src={img1} alt="products" />
        </div>

        <div>
          <img src={img2} alt="products" />
        </div>

        <div>
          <img src={img2} alt="products" />
        </div>

        <div>
          <img src={img2} alt="products" />
        </div>
      </div>
    );
  }
}
