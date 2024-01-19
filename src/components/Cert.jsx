import React from "react";
import "./Cert.css";
import Accordion from "./Accordion";

function Cert({ item }) {
  return (
    <>
      <div className="cert">
        <div className="cert-img-container">
          <img src={item.image} alt="" />
        </div>
        <Accordion props={item} />
      </div>
      <hr />
    </>
  );
}

export default Cert;
