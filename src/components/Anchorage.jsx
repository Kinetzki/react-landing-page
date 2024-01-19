import React from "react";

function Anchorage(props) {
  return (
    <ul>
      {props.items.map((item, i) => {
        return (
          <li
            className={
              props.intersecting === props.keywords[i]
                ? "is-intersecting"
                : "is-not-intersecting"
            }
            key={i}
          >{item}</li>
        );
      })}
    </ul>
  );
}

export default Anchorage;
