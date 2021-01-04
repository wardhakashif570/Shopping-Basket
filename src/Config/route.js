import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../Components/About Us/about";
import Products from "../Components/AllProducts";
import Cart from "../Components/Cart";
import Navbar from "../Components/NavBar";
import Home from "../Components/Home/Home";
export default function RouterMain() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/product">
          <Products />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        
      </Switch>
    </Router>
  );
}