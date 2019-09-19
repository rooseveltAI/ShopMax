import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./styles/App.scss";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ProductList from "./components/productlist/ProductList";
import Details from "./components/details/Details";
import Cart from "./components/cart/Cart";
import Default from "./components/Default";
import Modal from "./components/modal/Modal";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route component={Default}></Route>
        </Switch>
        <Modal />
        <Footer />
      </React.Fragment>
    );
  }
}
