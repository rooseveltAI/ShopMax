import React from "react";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div>
      <div>
        <button onClick={() => removeItem(id)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.414 12L17.707 7.707C18.098 7.316 18.098 6.684 17.707 6.293C17.316 5.902 16.684 5.902 16.293 6.293L12 10.586L7.70701 6.293C7.31601 5.902 6.68401 5.902 6.29301 6.293C5.90201 6.684 5.90201 7.316 6.29301 7.707L10.586 12L6.29301 16.293C5.90201 16.684 5.90201 17.316 6.29301 17.707C6.48801 17.902 6.74401 18 7.00001 18C7.25601 18 7.51201 17.902 7.70701 17.707L12 13.414L16.293 17.707C16.488 17.902 16.744 18 17 18C17.256 18 17.512 17.902 17.707 17.707C18.098 17.316 18.098 16.684 17.707 16.293L13.414 12Z"
              fill="#231F20"
            />
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="5"
              y="5"
              width="14"
              height="13"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.414 12L17.707 7.707C18.098 7.316 18.098 6.684 17.707 6.293C17.316 5.902 16.684 5.902 16.293 6.293L12 10.586L7.70701 6.293C7.31601 5.902 6.68401 5.902 6.29301 6.293C5.90201 6.684 5.90201 7.316 6.29301 7.707L10.586 12L6.29301 16.293C5.90201 16.684 5.90201 17.316 6.29301 17.707C6.48801 17.902 6.74401 18 7.00001 18C7.25601 18 7.51201 17.902 7.70701 17.707L12 13.414L16.293 17.707C16.488 17.902 16.744 18 17 18C17.256 18 17.512 17.902 17.707 17.707C18.098 17.316 18.098 16.684 17.707 16.293L13.414 12Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0)">
              <rect width="24" height="24" fill="#0D1C2E" />
            </g>
          </svg>
        </button>
      </div>
      
      <div>
        <img src={img} alt="product" />
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

      <div>
        <strong>item total: ${total}</strong>
      </div>
    </div>
  );
}
