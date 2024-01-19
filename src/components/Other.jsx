import React from "react";
import "./Other.css";
import TitleLabel from "./TitleLabel";
import Anchorage from "./Anchorage";
import Socials from "./Socials";

function Other(props) {
  return (
    <div className="other-main frost">
      <div>
        <TitleLabel text="On this page" />
        {props.current === "about" && (
          <Anchorage
            items={["Certifications", "Competitions", "Work", "Education"]}
            keywords={["cert", "compe", "work", "edu"]}
            intersecting={props.intersecting}
          />
        )}
      </div>

      <div className="other-foot">
        <hr />
          <Socials text="Connect with me on" />
      </div>
    </div>
  );
}

export default Other;
