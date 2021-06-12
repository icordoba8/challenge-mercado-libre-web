import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import queryString from "query-string";
import { connect } from "react-redux";
import "./styles.sass";
import ic_Search from "../../../assets/ic_Search.png";
import * as searchActions from "../../../redux/actions/searchActions";
const SearchBox = (props: any) => {
  const { search }: any = queryString.parse(useHistory().location.search);
  const history: any = useHistory();
  const { get_search_box, search: search_storage } = props;
  const [state, setState] = useState(search ? search : search_storage);

  const handleSubmit = (e: any) => {
    get_search_box(state);
    history.push(`/items?search=${state}`);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
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
//Mapeamos los estados del reducer
const mapStateToProps = (reducers: any) => {
  return reducers.searchReducer;
};
//Conectamos el componenete para acceder a las props
export default connect(mapStateToProps, searchActions)(SearchBox);
