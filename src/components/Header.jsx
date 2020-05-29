import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="col-md-12 text-center mt-4">
      <img src={logo} alt="" />
      <h3 className="mt-2 brand-title">Books Management Solution </h3>
    </div>
  );
};

export default Header;
