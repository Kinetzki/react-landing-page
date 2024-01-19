import React from "react";
import "./Education.css";

function Education(props) {
  return (
    <>
      <h2>{props.level}</h2>
      <hr />
      <div className="education-detail-container">
        <h3>{props.content.school}</h3>
        {props.content.detail.map((item, i) => {
          return <p key={i}>{item}</p>;
        })}
      </div>
    </>
  );
}

export default Education;
