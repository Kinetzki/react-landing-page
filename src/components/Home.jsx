import React from "react";
import "./Home.css";
import IconButton from "./IconButton";
import Socials from "./Socials";

function Home() {
  return (
    <div className="home">
      <div className="home-descriptions">
        <h3>Kinetzki</h3>
        <h5>-- Paul Kenneth S. Quinto</h5>
        <h4>I am an aspiring Front-end & Back-end Developer.</h4>
        <IconButton text="Let's talk"></IconButton>
        <br />
      </div>
      <div className="home-lower">
        <Socials text="" />
      </div>
    </div>
  );
}

export default Home;
