import React from "react";
import "./IconButton.css";

function IconButton({ children, text }) {
  return (
    <div className="icon-button">
      {text}
      {children}
    </div>
  );
}

export default IconButton;
