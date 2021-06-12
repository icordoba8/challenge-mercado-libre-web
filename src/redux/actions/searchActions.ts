import {GET_SEARCH,CLEAR_STATE} from "../types/searchTypes";


// Pasamos el parametro de la url al stado 
export const get_search_box = (search:string) => async (dispatch: any) => {
    dispatch({
      type: GET_SEARCH,
      payload: search,
    });
};

export const clear_state_search = () => async (dispatch: any) => {
  dispatch({
    type: CLEAR_STATE,
    payload: '',
  });
};




