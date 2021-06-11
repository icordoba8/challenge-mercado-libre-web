import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
//Se combinan los reductores para pasarlo al store
export default combineReducers({
  productsReducer,
});
