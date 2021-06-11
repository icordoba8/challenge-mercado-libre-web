import React from "react";
import { Route, Switch } from "react-router-dom";
import BreadCrumb from "../BreadCrumb";
import Header from "../Header";
import Home from "../Home";
import ListItems from "../ListItems";
import DetailItem from "../ListItems/DetailItem";
import "./styles.sass";
const Layout = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <BreadCrumb />
        <div className="container">
          <Switch>
            <Route component={Home} exact path="/" />
            <Route component={ListItems} exact path="/items" />
            <Route component={DetailItem} exact path="/items/:id" />
          </Switch>
        </div>
      </div>
    </>
  );
};

export default Layout;
