import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";
import { logout } from "../store/actions/userActions";

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user.user);
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light dash-navbar">
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
        <FontAwesomeIcon icon={faUser} color="#1d3b6c" className="mr-2" />
        <span className="navbar-text mr-4 logged-in-user">{`${user.firstName} ${user.lastName}`}</span>
        <button
          className="btn btn-outline-info my-2 my-sm-0"
          type="submit"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
