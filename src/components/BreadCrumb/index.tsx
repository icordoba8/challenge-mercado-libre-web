import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as productsActions from "../../redux/actions/productsActions";
import "./styles.sass";
const BreadCrumb = (props: any) => {
  const { categories } = props;
  return (
    <div className="categories">
      {categories.map((item: string, index: number) => (
        <span key={index}>
          <Link to={`/${item}`}>{item}</Link>
          {index + 1 < categories.length ? <span>{" > "}</span> : ""}
        </span>
      ))}
    </div>
  );
};
//Mapeamos los estados del reducer
const mapStateToProps = (reducers: any) => {
  return reducers.productsReducer;
};
//Conectamos el componenete para acceder a las props
export default connect(mapStateToProps, productsActions)(BreadCrumb);
