import React from "react";
import "./HighlightSection.css";

function HighlightSection({
  children,
  title,
  description,
  destination,
}) {
  return (
    <div className="highlight-section">
      <div className="highlight-header">
        <div>{children}</div>
        <div className="header-description">
          <a href={destination} target="_blank"><h2>{title}</h2></a>
          <p>{description}</p>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default HighlightSection;
