import React from "react";
import { BrowserRouter as Router, HashRouter } from "react-router-dom";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Router>
      {/* <HashRouter> */}
      <Layout />
      {/* </HashRouter> */}
    </Router>
  );
};

export default App;
