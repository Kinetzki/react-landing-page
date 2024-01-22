import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import "./Header.css";
import TitleLabel from "./TitleLabel";
import IconButton from "./IconButton";

function Header(props) {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(!props.mobile ? true : false);

  useEffect(() => {
    props.goto(active);
  }, [active]);

  return (
    <>
      <div className="menu-panel frost">
        <img
          src={logo}
          alt=""
          onClick={() => {
            setActive("home");
          }}
        />
        <br />
        {!props.mobile && <TitleLabel text="Getting Started" />}
        {open && (
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
        )}
        {props.mobile && (
          <IconButton
            click={() => {
              setOpen(!open);
            }}
          >
            {!open? (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>) :
            (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>)}
          </IconButton>
        )}
      </div>
    </>
  );
}

export default Header;
