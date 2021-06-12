import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import searchReducer from "./searchReducer";
//Se combinan los reductores para pasarlo al store
export default combineReducers({
    productsReducer,
    searchReducer
});
