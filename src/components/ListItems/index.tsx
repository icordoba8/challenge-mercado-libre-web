import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import queryString from "query-string";
import Item from "./Item";
import { ItemsService } from "../../services";
import "./styles.sass";
const ListItems = () => {
  const [items, setItems] = useState([]);
  const { search }: any = queryString.parse(useHistory().location.search);
  const getItems = useCallback(async () => {
    const { data } = await ItemsService.search(search);
    if (data.error && data.error !== "") {
      return;
    }
    setItems(data.items);
  }, [search]);

  useEffect(() => {
    getItems();
  }, [getItems]);
  // console.log(useParams());

  return (
    <ul className="items">
      {items.map((item: any, index) => {
        return <Item key={index} item={item} />;
      })}
    </ul>
  );
};

export default ListItems;
