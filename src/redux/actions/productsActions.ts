import {
  GET_PRODUCTS,
  GET_PRODUCT,
  CLEAR_STATE,
  LOAD,
  ERROR,
} from "../types/productsTypes";

import axios from "axios";
import {api} from '../../../package.json';
// Obtener los productos y se lo pasamos al store de productos
export const get_products = (query:string) => async (dispatch: any) => {
  dispatch({
    type: LOAD,
  });

  try {
    const {data} = await axios.get(`${api}items?search=${query}`,{ withCredentials: true });
    if (!data.error) {
      dispatch({
      type: GET_PRODUCTS,
      payload: data,
      });
    }
    
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: ERROR,
      payload: "Error cargando productos.",
    });
  }
};
export const get_product = (id:string) => async (dispatch: any) => {
  dispatch({
    type: LOAD,
  });

  try {
    const { data } = await axios.get(`${api}items/${id}`, { withCredentials: true });
    if (!data.error) {
      dispatch({
      type: GET_PRODUCT,
      payload: data,
      });
    }
    
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: ERROR,
      payload: "Error cargando productos.",
    });
  }
};

export const clear_state_product = (id:string) => async (dispatch: any) => {
  dispatch({
    type: CLEAR_STATE,
    payload: null,
  });
};




