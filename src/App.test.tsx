import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
//Reduccers a utilizar en el store
import reducers from "./redux/reducers";
const store = createStore(
  reducers, // Reducers
  {}, // Estado inicial
  applyMiddleware(reduxThunk)
);
import App from "./App";

test("Render component App", () => {
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
