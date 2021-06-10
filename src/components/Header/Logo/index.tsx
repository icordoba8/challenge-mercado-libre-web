import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/Logo_ML2.png";
import "./styels.sass";
const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} className="logo-header" alt="" />
    </Link>
  );
};

export default Logo;
