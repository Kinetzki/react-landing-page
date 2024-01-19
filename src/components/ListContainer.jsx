import React from "react";
import Cert from "./Cert";

function ListContainer(props) {
  return (
    <>
      {props.certs.map((cert, i) => {
        return <Cert item={cert} key={i}/>;
      })}
    </>
  );
}

export default ListContainer;
