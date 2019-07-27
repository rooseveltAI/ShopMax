import React, { Component } from "react";

import Navbar from "./navbar";
import Footer from "./footer";

export default class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="main">{this.props.children}</div>
        <Footer />
      </React.Fragment>
    );
  }
}
