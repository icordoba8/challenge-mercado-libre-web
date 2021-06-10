import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.sass";
import ItemModel from "../../../models/item";
import { ItemsService } from "../../../services";
import BuyButton from "../../BuyButton";
import amountFormat from "../../../libs/amountFormat";
const initialState = {
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
};
const DetailItem = () => {
  const { id }: any = useParams();
  const [item, setItem] = useState<ItemModel>(initialState);
  const getItem = useCallback(async () => {
    const { data } = await ItemsService.detail(id);
    if (data.error && data.error !== "") {
      return;
    }
    setItem(data);
  }, [id]);

  useEffect(() => {
    getItem();
  }, [getItem]);
  return (
    <>
      <div className="image-buy">
        <div>
          <div className="picture">
            <img src={item.picture} alt="" />
          </div>
          <div className="description">
            <h2>Descripción del producto </h2>
            <p>{item.description}</p>
          </div>
        </div>
        <div className="info-buy">
          <p className="condition">
            {item.condition} - {item.sold_quantity} vendidos
          </p>
          <h1 className="title">{item.title} </h1>
          <p className="price">$ {amountFormat(item.price.amount)}</p>
          <BuyButton />
        </div>
      </div>
      <div></div>
    </>
  );
};

export default DetailItem;
