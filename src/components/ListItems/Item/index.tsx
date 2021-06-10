import React from "react";
import "./styles.sass";
import ic_shipping from "../../../assets/ic_shipping.png";
const Item = (props: any) => {
  const { title, picture, price, free_shipping } = props.item;
  return (
    <li className="item">
      <div className="content-item">
        <div className="item-thumbnail">
          <img className="thumbnail" src={picture} alt="" />
        </div>
        <div className="info">
          <span>
            {"$"} {price.amount}{" "}
            {free_shipping ? <img src={ic_shipping} alt="" /> : ""}
          </span>
          <p className="title">{title}</p>
        </div>
      </div>
    </li>
  );
};

export default Item;
