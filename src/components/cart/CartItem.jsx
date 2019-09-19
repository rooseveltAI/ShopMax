import React from "react";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div>
      <div>
        <img src={img} alt="product image" />
      </div>

      <div>
        <h4>{title}</h4>
      </div>

      <div>
        <h4>${price}</h4>
      </div>

      <div>
        <button onClick={() => decrement(id)}>-</button>
      </div>

      <div>
        <h5>{count}</h5>
      </div>

      <div>
        <button onClick={() => increment(id)}>+</button>
      </div>
    </div>
  );
}
