import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import queryString from "query-string";
import { connect } from "react-redux";
import Item from "./Item";
import Loader from "../Loader";
import * as productsActions from "../../redux/actions/productsActions";

import "./styles.sass";
const ListItems = (props: any) => {
  const { search }: any = queryString.parse(useHistory().location.search);
  const { get_products, clear_state_product, productsReducer, searchReducer } =
    props;
  const { search: search_storage } = searchReducer;
  const { produts, load, error } = productsReducer;

  useEffect(() => {
    get_products(search_storage ? search_storage : search);
    return () => {
      clear_state_product();
    };
  }, [get_products, search_storage, search, clear_state_product]);
  if (load) {
    return <Loader />;
  }

  if (produts.length === 0 && error === "") {
    return (
      <div className="no-search-result">
        <div>
          <h3>No hay publicaciones que coincidan con tu búsqueda</h3>
        </div>
      </div>
    );
  }

  if (error !== "") {
    return (
      <div className="no-search-result">
        <div>
          <h4>{error}</h4>
        </div>
      </div>
    );
  }
  return (
    <ul className="items">
      {produts.map((item: any, index: any) => {
        return <Item key={index} item={item} />;
      })}
    </ul>
  );
};
//Mapeamos los estados del reducer
const mapStateToProps = (reducers: any) => {
  return reducers;
};
//Conectamos el componenete para acceder a las props
export default connect(mapStateToProps, productsActions)(ListItems);
