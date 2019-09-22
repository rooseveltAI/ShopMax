import React from "react";
import { Link } from "react-router-dom";

export default function CartTotals({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="cart--totals">
        <h3>
          <span>Subtotal:</span>
          <strong> ${cartSubTotal}</strong>
        </h3>

        <h3>
          <span>Tax:</span>
          <strong> ${cartTax}</strong>
        </h3>

        <h3>
          <span>Total:</span>
          <strong> ${cartTotal}</strong>
        </h3>

        <Link to="/">
          <button className="btn btn--pink" onClick={() => clearCart()}>
            Clear Cart
          </button>
        </Link>
      </div>
    </React.Fragment>
  );
}
