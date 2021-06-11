import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import queryString from "query-string";
import { connect } from "react-redux";
import Item from "./Item";
import * as productsActions from "../../redux/actions/productsActions";

import "./styles.sass";
const ListItems = (props: any) => {
  const { search }: any = queryString.parse(useHistory().location.search);
  const { get_products, produts, clear_state_product, load, error } = props;
  useEffect(() => {
    get_products(search);
    return () => {
      clear_state_product();
    };
  }, [get_products]);

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
  return reducers.productsReducer;
};
//Conectamos el componenete para acceder a las props
export default connect(mapStateToProps, productsActions)(ListItems);
