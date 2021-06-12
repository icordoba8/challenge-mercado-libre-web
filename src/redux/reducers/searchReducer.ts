import {GET_SEARCH,CLEAR_STATE} from "../types/searchTypes";
//Estado inicial del reducer
const INITIAL_STATE = {
  search: ""
};

//Procesmos el tipo de accion que ejecutara el reducer
const searchReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_SEARCH:
        return {
            ...state,
            search: action.payload
      };
     case CLEAR_STATE:
        return {
            ...state,
          search: action.payload
       };
    default:
      return state;
  }
};


export default searchReducer;
