import React, { Component } from "react";
import HeroImage from "../header/HeroHeader";
import Product from "../product/Product";
import Title from "../Title";
import { ProductConsumer } from "../../context";

import LatestProducts from '../latestproduct/LatestProducts' 

// import img1 from '../../images/discover_female';
// import img2 from '../../images/discover_male';

import "./productlist.scss";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
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

            {/*  */}

            <Title name="Latest" title="Products" />
          </div>

          <LatestProducts />

          <div className="discover--svg"></div>
          <h1 className="discover--h1">
            Discover The <br /> Collections.
          </h1>

          <div className="collections--container">
            <div className="discover--female">image here</div>
            <div className="discover--male"></div>
          </div>

          <Title name="All" title="Products" />

          <div className="product--card__container">
            <ProductConsumer>
              {value => {
                return value.products.map(product => {
                  return <Product key={product.id} product={product} />;
                });
              }}
            </ProductConsumer>
          </div>
        </React.Fragment>
      </div>
    );
  }
}
