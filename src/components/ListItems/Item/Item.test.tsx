import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";
//Reduccers a utilizar en el store
import reducers from "../../../redux/reducers";
const store = createStore(
  reducers, // Reducers
  {}, // Estado inicial
  applyMiddleware(reduxThunk)
);
import Item from ".";
const INITIAL_STATE = {
  produts: [],
  categories: [],
  product: {
    autor: {
      name: "",
      lastname: "",
    },
    id: "",
    title: "",
    price: {
      currency: "",
      amount: 0,
      decimals: 0,
    },
    picture: "",
    condition: "",
    free_shipping: false,
    sold_quantity: 0,
    description: "",
  },
  load: false,
  error: "",
};
test("Render component Item", () => {
  const { container } = render(
    <Provider store={store}>
      <Router>
        <Item item={INITIAL_STATE} />
      </Router>
    </Provider>
  );
});
