import React from "react";
import "./styles.sass";
import Logo from "./Logo/";
import SearchBox from "./SearchBox";
const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <Logo />
      </div>
      <div>
        <SearchBox />
      </div>
    </header>
  );
};

export default Header;
