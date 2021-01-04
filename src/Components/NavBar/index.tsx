import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

import { useSelector } from "react-redux";
const Navbar = () => {
  const value = useSelector((state: any) => {
    return state.cartSlice.cartArray.length;
  });
  return (
    <div className="W-100">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Shopping  App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="#navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
          <span className="nav-item nav-link  ">
              <Link to="/">Home</Link>
            </span>
            <span className="nav-item nav-link  ">
              <Link to="/product">Products</Link>
            </span>
            <span className="nav-item nav-link  ">
              <Link to="/about">About Us</Link>
            </span>
            <span className="nav-item nav-link ">
              <Link to="/cart">
                Cart
                <span className=" ml-1 mr-2 badge badge-pill badge-dark">
                  {value || 0}
                </span>
              </Link>
            </span>
                     </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;