import React from "react";
import "./styles.sass";
const Loader = () => {
  return (
    <>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default Loader;
