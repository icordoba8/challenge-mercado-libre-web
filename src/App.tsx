import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { BrowserRouter as Router, HashRouter } from "react-router-dom";
import Layout from "./components/Layout";
import { autor } from "../package.json";
const App = () => {
  const [cookies, setCookie] = useCookies(["autor"]);
  useEffect(() => {
    setCookie("autor", JSON.stringify(autor), { path: "/" });
  }, [setCookie]);

  return (
    <Router>
      {/* <HashRouter> */}
      <Layout />
      {/* </HashRouter> */}
    </Router>
  );
};

export default App;
