import React from "react";
import "./Iconcard.css";

function IconCard({ children, title }) {
  return (
    <div className="icon-card">
      {children}
      <h4>{title}</h4>
    </div>
  );
}

export default IconCard;
