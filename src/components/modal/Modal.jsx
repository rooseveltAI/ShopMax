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
                  <h4>Item added to cart</h4>
                  <img src={img} width="50%" alt="product" />
                  <h4>{title}</h4>
                  <h4>${price}</h4>

                  <Link to="/">
                    <button onClick={() => closeModal()}>
                      Continue Shopping
                    </button>
                  </Link>

                  <Link to="/cart">
                    <button onClick={() => closeModal()}>
                      Go to cart
                    </button>
                  </Link>
                </div>
              </div>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
