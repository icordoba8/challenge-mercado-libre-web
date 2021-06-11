import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";
//Reduccers a utilizar en el store
import reducers from "../../redux/reducers";
const store = createStore(
  reducers, // Reducers
  {}, // Estado inicial
  applyMiddleware(reduxThunk)
);
import ListItems from ".";

test("Render component ListItems", () => {
  const { container } = render(
    <Provider store={store}>
      <Router>
        <ListItems />
      </Router>
    </Provider>
  );
});
