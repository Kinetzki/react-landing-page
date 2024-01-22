import React from "react";
import "./Content.css";
import About from "./About";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

function Content(props) {
  return (
    <div className={"content-main " + (props.page !== "home" ? "frost" : "full")}>
      {props.page === "home" && <Home/>}
      {props.page === "about" && <About intersecting={props.intersecting}/>}
      {props.page === "skills" && <Skills intersecting={props.intersecting}/>}
      {props.page === "projects" && <Projects intersecting={props.intersecting}/>}
      {props.page === "contact" && <Contact intersecting={props.intersecting}/>}
    </div>
  );
}

export default Content;
