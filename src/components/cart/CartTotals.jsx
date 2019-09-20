import React from "react";
import { Link } from "react-router-dom";

export default function CartTotals({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div>
        <Link to="/">
          <button onClick={() => clearCart()}>Clear Cart</button>
        </Link>

        <h4>
          <span>Subtotal:</span>
          <strong>$ {cartSubTotal}</strong>
        </h4>

        <h4>
          <span>Tax:</span>
          <strong>$ {cartTax}</strong>
        </h4>

        <h4>
          <span>Total:</span>
          <strong>$ {cartTotal}</strong>
        </h4>
      </div>
    </React.Fragment>
  );
}
