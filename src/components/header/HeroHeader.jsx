import React from "react";

import "./heroheader.scss";
// import HeroImage from "../../images/banner_img_mobile.png";

export default function HeroHeader() {
  return (
    <div className="hero--header">
      <div className="header--contents">
        <h1 className="header--h1">2019</h1>
        <h3 className="header--h3">new arraivals</h3>
        <div className="header--p">
          <p className="header--price">$59.00</p>{" "}
          <p className="header--save--price">$98.00</p>
        </div>
        <div className="btn--container">
          <button className="btn white-btn">Shop Now</button>
          <button className="btn dark-green--btn">Collections</button>
        </div>
      </div>
    </div>
  );
}
