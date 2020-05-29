import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light dash-navbar">
      <Link to="/books" className="navbar-brand">
        <img src={logo} className="d-inline-block align-top" alt="logo" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/books" className="nav-link brand-title">
              Books Management Solution
            </Link>
          </li>
        </ul>
        <span className="navbar-text mr-4 logged-in-user">Frank Atukunda</span>
        <button className="btn btn-outline-info my-2 my-sm-0" type="submit">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
