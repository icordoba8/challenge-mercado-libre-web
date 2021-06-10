import React from "react";
import "./styles.sass";
import ic_shipping from "../../../assets/ic_shipping.png";
import { Link } from "react-router-dom";
import amountFormat from "../../../libs/amountFormat";
const Item = (props: any) => {
  const { id, title, picture, price, free_shipping } = props.item;
  return (
    <Link to={`/items/${id}`}>
      <li className="item">
        <div className="content-item">
          <div className="item-thumbnail">
            <img className="thumbnail" src={picture} alt="" />
          </div>
          <div className="info">
            <span>
              <span className="price">
                {"$"} {amountFormat(price.amount)}
              </span>

              {free_shipping ? (
                <img className="ic_shipping" src={ic_shipping} alt="" />
              ) : (
                ""
              )}
            </span>
            <p className="title">{title}</p>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default Item;
