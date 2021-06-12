import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as searchActions from "../../redux/actions/searchActions";
const Home = (props: any) => {
  const { clear_state_search } = props;
  console.log(props);
  useEffect(() => {
    clear_state_search();
    console.log(props);
  }, [clear_state_search]);
  return <div></div>;
};

//Mapeamos los estados del reducer
const mapStateToProps = (reducers: any) => {
  return reducers.searchReducer;
};
//Conectamos el componenete para acceder a las props
export default connect(mapStateToProps, searchActions)(Home);
