import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import queryString from "query-string";
import "./styles.sass";
import ic_Search from "../../../assets/ic_Search.png";
const SearchBox = () => {
  const { search }: any = queryString.parse(useHistory().location.search);
  const [state, setState] = useState(search ? search : "");

  return (
    <form action={`/items?search= ${state}`} method="GET">
      <div className="search-container">
        <input
          className="search-box"
          placeholder="Nunca dejes de buscar"
          type="text"
          name="search"
          value={state}
          onChange={(e: any) => setState(e.target.value)}
          autoComplete="off"
        />
        <button className="search-button" type="submit">
          <img className="search-image" src={ic_Search} alt="Icono serach" />
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
