import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context";
import PropTypes from "prop-types";

import "./product.scss";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <div className="card">
        <ProductConsumer>
          {value => (
            <div
              className="img--container"
              onClick={() => value.handleDetail(id)}
            >
              <Link to="/details">
                <img src={img} alt="product" className="card--img" />
              </Link>
              <button
                className="cart-btn"
                disabled={inCart ? true : false}
                onClick={() => {
                  value.addToCart(id);
                  value.openModal(id);
                }}
              >
                {inCart ? (
                  <p disabled>in cart</p>
                ) : (
                  <i>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.49931 8.3217H5.50089L4.64168 5.17251H11.0739L9.49931 8.3217ZM11.9667 4.62035C11.7741 4.30858 11.4402 4.12278 11.0739 4.12278H4.35562L4.03177 2.93501C3.96931 2.7067 3.76199 2.54819 3.52528 2.54819H2.47555C2.1853 2.54819 1.95068 2.78333 1.95068 3.07305C1.95068 3.36278 2.1853 3.59792 2.47555 3.59792H3.12428L4.59338 8.98461C4.65584 9.21292 4.86316 9.37143 5.09987 9.37143H9.82366C10.0226 9.37143 10.2042 9.25911 10.2934 9.08118L12.0129 5.64174C12.1772 5.3137 12.1593 4.93212 11.9667 4.62035ZM4.83761 10.4212C4.40302 10.4212 4.05031 10.7733 4.05031 11.2085C4.05031 11.6436 4.40302 11.9958 4.83761 11.9958C5.2722 11.9958 5.62491 11.6436 5.62491 11.2085C5.62491 10.7733 5.2722 10.4212 4.83761 10.4212ZM9.29896 11.2085C9.29896 10.7733 9.65167 10.4212 10.0863 10.4212C10.5209 10.4212 10.8736 10.7733 10.8736 11.2085C10.8736 11.6436 10.5209 11.9958 10.0863 11.9958C9.65167 11.9958 9.29896 11.6436 9.29896 11.2085Z"
                        fill="#231F20"
                      />
                      <mask
                        id="mask0"
                        mask-type="alpha"
                        maskUnits="userSpaceOnUse"
                        x="1"
                        y="2"
                        width="12"
                        height="10"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.49931 8.3217H5.50089L4.64168 5.17251H11.0739L9.49931 8.3217ZM11.9667 4.62035C11.7741 4.30858 11.4402 4.12278 11.0739 4.12278H4.35562L4.03177 2.93501C3.96931 2.7067 3.76199 2.54819 3.52528 2.54819H2.47555C2.1853 2.54819 1.95068 2.78333 1.95068 3.07305C1.95068 3.36278 2.1853 3.59792 2.47555 3.59792H3.12428L4.59338 8.98461C4.65584 9.21292 4.86316 9.37143 5.09987 9.37143H9.82366C10.0226 9.37143 10.2042 9.25911 10.2934 9.08118L12.0129 5.64174C12.1772 5.3137 12.1593 4.93212 11.9667 4.62035ZM4.83761 10.4212C4.40302 10.4212 4.05031 10.7733 4.05031 11.2085C4.05031 11.6436 4.40302 11.9958 4.83761 11.9958C5.2722 11.9958 5.62491 11.6436 5.62491 11.2085C5.62491 10.7733 5.2722 10.4212 4.83761 10.4212ZM9.29896 11.2085C9.29896 10.7733 9.65167 10.4212 10.0863 10.4212C10.5209 10.4212 10.8736 10.7733 10.8736 11.2085C10.8736 11.6436 10.5209 11.9958 10.0863 11.9958C9.65167 11.9958 9.29896 11.6436 9.29896 11.2085Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0)">
                        <rect
                          x="0.901123"
                          y="0.973587"
                          width="12.5968"
                          height="12.5968"
                          fill="#0D1C2E"
                        />
                      </g>
                    </svg>
                  </i>
                )}
              </button>
            </div>
          )}
        </ProductConsumer>
        {/* Card footer */}
        <div className="product--name--price">
          <p>{title}</p>
          <h5>
            <span>$</span>
            {price}
          </h5>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};
