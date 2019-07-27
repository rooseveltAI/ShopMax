import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "../styles/App.scss";

// Routes
import Product from "./product";
import Cart from "./cart";
import Default from "./default";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route path="/products" component={Product} />
            <Route path="/cart" component={Cart} />
            <Route path="/page-not-found" component={Default} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
