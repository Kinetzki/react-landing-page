import React from "react";
import "./IconButton.css";

function IconButton({ children, text ,click}) {
  return (
    <div className="icon-button" onClick={click}>
      {text}
      {children}
    </div>
  );
}

export default IconButton;
