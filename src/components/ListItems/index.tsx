import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import queryString from "query-string";
import { connect } from "react-redux";
import Item from "./Item";
import * as productsActions from "../../redux/actions/productsActions";
import { ItemsService } from "../../services";
import "./styles.sass";
const ListItems = (props: any) => {
  const { search }: any = queryString.parse(useHistory().location.search);
  const { get_products, produts, load, error } = props;
  useEffect(() => {
    get_products(search);
  }, [get_products]);
  // console.log(useParams());

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
