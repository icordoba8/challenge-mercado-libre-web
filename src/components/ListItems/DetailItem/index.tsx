import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import "./styles.sass";

import BuyButton from "../../BuyButton";
import amountFormat from "../../../libs/amountFormat";
import * as productsActions from "../../../redux/actions/productsActions";

const DetailItem = (props: any) => {
  const { id }: any = useParams();
  const { product, get_product, error } = props;
  useEffect(() => {
    get_product(id);
  }, [get_product, id]);

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
    <>
      <div className="image-buy">
        <div>
          <div className="picture">
            <img src={product.picture} alt="" />
          </div>
        </div>
        <div className="info-buy">
          <p className="condition">
            {product.condition === "new" ? "Nuevo" : product.condition} -
            {product.sold_quantity} vendidos
          </p>
          <h1 className="title">{product.title} </h1>
          <p className="price">$ {amountFormat(product.price.amount)}</p>
          <BuyButton />
        </div>
      </div>
      <div className="description">
        <h2>Descripción del producto </h2>
        <p>{product.description}</p>
      </div>
    </>
  );
};

//Mapeamos los estados del reducer
const mapStateToProps = (reducers: any) => {
  return reducers.productsReducer;
};
//Conectamos el componenete para acceder a las props
export default connect(mapStateToProps, productsActions)(DetailItem);
