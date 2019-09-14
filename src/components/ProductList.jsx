import React, { Component } from "react";
import HeroImage from "./header/HeroHeader";
import Product from "./product/Product";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <HeroImage />
        <h1>Latest Products</h1>
        <Product />
      </div>
    );
  }
}
