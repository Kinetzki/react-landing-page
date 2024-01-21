import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import "./Header.css";
import TitleLabel from "./TitleLabel";

function Header(props) {
  const [active, setActive] = useState("home");

  useEffect(() => {
    props.goto(active);
  }, [active]);
  
  return (
    <>
      <div className="menu-panel frost">
          <img src={logo} alt="" onClick={()=>{
            setActive("home")
          }}/>
        <br />
        {!props.mobile && <TitleLabel text="Getting Started"/>}
        <ul>
          <li
            className={active === "about" ? "active" : undefined}
            onClick={() => {
              setActive("about");
            }}
          >
            About
          </li>
          <li
            className={active === "skills" ? "active" : undefined}
            onClick={() => {
              setActive("skills");
            }}
          >
            Skills
          </li>
          <li
            className={active === "projects" ? "active" : undefined}
            onClick={() => {
              setActive("projects");
            }}
          >
            Projects
          </li>
          <li
            className={active === "contact" ? "active" : undefined}
            onClick={() => {
              setActive("contact");
            }}
          >
            Contact
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
