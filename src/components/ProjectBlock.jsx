import React from "react";
import ShadedBox from "../ShadedBox";

function ProjectBlock(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <ShadedBox>
        <p>{props.description}</p>
      </ShadedBox>
      <h4>Tasks include</h4>
      <ul>
        {props.details.map((detail, i) => {
          return <li key={i}>{detail}</li>;
        })}
      </ul>
    </div>
  );
}

export default ProjectBlock;
