import React from "react";
import './IconHeader.css'
import { forwardRef } from "react";

const IconHeader = forwardRef(({ children, text, intersect}, ref) => {
  return (
    <div className="icon-header" ref={intersect}>
      {children}
      <h2>{text}</h2>
    </div>
  );
})

export default IconHeader;
