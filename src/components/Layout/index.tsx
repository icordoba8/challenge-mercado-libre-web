import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header";
import Home from "../Home";
import ListItems from "../ListItems";
import "./styles.sass";
const Layout = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={ListItems} path="/items/" />
        </Switch>
      </div>
    </>
  );
};

export default Layout;
