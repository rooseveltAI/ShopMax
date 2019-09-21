import React from "react";
import img1 from "../../images/product_11.jpg";
import img2 from "../../images/product_12.jpg";
import img3 from "../../images/product_14.jpg";
import img4 from "../../images/product_17.jpg";

import "./latestproducts.scss";

export default function LatestProducts() {
  return (
    <section className="latest--products">
      <div className="products--card">
        <img src={img1} alt="new product" />
        <img src={img2} alt="new product" />
        <img src={img3} alt="new product" />
        <img src={img4} alt="new product" />
      </div>
    </section>
  );
}
