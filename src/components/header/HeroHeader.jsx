import React from "react";

import "./heroheader.scss";
// import HeroImage from "../../images/banner_img_mobile.png";

export default function HeroHeader() {
  return (
    <div className="hero--header">
      <div>
        <h1 className="header--h1">2019</h1>
        <h3 className="header--h3">New Arraivals</h3>
        <p className="header--price">$59.00</p> <p className="header--save--price">$98.00</p>
        <div className="btn--container">
          <button className="btn white-btn">Shop Now</button>
          <button className="btn dark-green--btn">Collections</button>
        </div>
      </div>
    </div>
  );
}
