import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";

import "./details.scss";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            img,
            info,
            price,
            title,
            inCart,
            inStock
          } = value.detailProduct;
          return (
            <div>
              {/* Title */}
              {/* end title */}
              {/* Product info */}
              <div className="details--container">
                <div className="details--image__container">
                  <img className="details--image" src={img} alt="detail" />
                </div>
                <div className="deatil--text--details">
                  <h2 className="detail--title--h2">{title}</h2>
                  <h4 className="detail--price">
                    <strong>${price}</strong>
                  </h4>
                  <h4 className="detail--available">
                    Availbale: <strong className="notif">{inStock}</strong>
                  </h4>
                  <hr />
                  <h4>Information</h4>
                  {/* <p className="detail--info">{info}</p> */}
                  <hr />

                  <h4>Shipping and Returns</h4>
                  <hr />
                  {/* Buttons */}
                  <div className="details--btn__container">
                    <Link to="/">
                      <button className="btn btn--stroke">Back to Products</button>
                    </Link>

                    <button
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                      className="btn btn--pink"
                    >
                      {inCart ? "in cart" : "Add to cart"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
