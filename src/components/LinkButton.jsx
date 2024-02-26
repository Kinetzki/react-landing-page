import React from "react";

function LinkButton({ children, link, text }) {
  return (
    <div className="link-button">
      <a href={link} target="_blank">{text}</a>
      {children}
    </div>
  );
}

export default LinkButton;
