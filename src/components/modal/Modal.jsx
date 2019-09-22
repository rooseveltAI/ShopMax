import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";

import "./modal.scss";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <div className="modal--container">
                <div id="modal">
                  <h4 className="h4--added-to-cart">Item added to cart</h4>
                  <img src={img} width="50%" alt="product" />
                  <div className="modal--title--price">
                    <h4>{title}</h4>
                    <h4>${price}</h4>
                  </div>

                  <div className="modal--btn__container">
                    <Link to="/">
                      <button
                        className="btn btn--stroke"
                        onClick={() => closeModal()}
                      >
                        Continue Shopping
                      </button>
                    </Link>

                    <Link to="/cart">
                      <button
                        className="btn btn--pink"
                        onClick={() => closeModal()}
                      >
                        Go to cart
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
