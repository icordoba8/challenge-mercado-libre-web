import {
   GET_PRODUCTS,
   GET_PRODUCT,
  LOAD,
  ERROR,
} from "../types/productsTypes";
//Estado inicial del reducer
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

//Procesmos el tipo de accion que ejecutara el reducer
const productsReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_PRODUCTS:
        return {
            ...state,
            produts: action.payload.items,
            categories: action.payload.categories,
            load: false,
            error: "",
       };
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload.item,
        categories: action.payload.categories,
        load: false,
        error: "",
      };

    case LOAD:
      return { ...state, load: true };

    case ERROR:
      return { ...state, error: action.payload, load: false };

    default:
      return state;
  }
};

export default productsReducer;
