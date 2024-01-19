import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import "./About.css";
import ComboBox from "./ComboBox";
import BoxContainer from "./BoxContainer";
import Education from "./Education";
import ListContainer from "./ListContainer";
import {
  educationBackground,
  certifications,
  competitions,
  works,
} from "./Objects";
import IconHeader from "./IconHeader";
import ShadedBox from "../ShadedBox";
import PageLocation from "./PageLocation";
import IconButton from "./IconButton";

function About(props) {
  const [level, setLevel] = useState("College");

  const [certRef, certInView] = useInView({
    threshold: 1,
  });
  const [compeRef, compeInView] = useInView({
    threshold: 1,
  });
  const [workRef, workInView] = useInView({
    threshold: 1,
  });
  const [eduRef, eduInView] = useInView({
    threshold: 1,
  });

  const handleRef = (inter) => {
    props.intersecting(inter);
  };

  useEffect(() => {
    if (certInView) {
      handleRef("cert");
    } else if (compeInView) {
      handleRef("compe");
    } else if (workInView) {
      handleRef("work");
    } else if (eduInView) {
      handleRef("edu");
    } else {
      handleRef("");
    }
  }, [certInView, compeInView, workInView, eduInView]);

  return (
    <div className="about">
      <div className="intro">
        <h3>Hi! I'm</h3>
        <h1>Kenneth.</h1>
        <hr></hr>
        <ShadedBox>
          <p>I am a</p>
          <h2>Front-End / Back-end Developer.</h2>
          <p>
            As a dedicated and results-driven software developer combined with a
            passion for problem-solving, to deliver innovative and efficient
            solutions for complex challenges in the world of software
            development.
          </p>
        </ShadedBox>
      </div>

      <br />
      <PageLocation page="About" current="Certifications" />
      <IconHeader text="Certifications" intersect={certRef}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30"
          fill="#a3fdffe7"
          width="30"
          viewBox="0 0 512 512"
        >
          <path d="M211 7.3C205 1 196-1.4 187.6 .8s-14.9 8.9-17.1 17.3L154.7 80.6l-62-17.5c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l17.5 62L18.1 170.6c-8.4 2.1-15 8.7-17.3 17.1S1 205 7.3 211l46.2 45L7.3 301C1 307-1.4 316 .8 324.4s8.9 14.9 17.3 17.1l62.5 15.8-17.5 62c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l62-17.5 15.8 62.5c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l45-46.2 45 46.2c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3l15.8-62.5 62 17.5c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-17.5-62 62.5-15.8c8.4-2.1 15-8.7 17.3-17.1s-.2-17.4-6.4-23.4l-46.2-45 46.2-45c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-62.5-15.8 17.5-62c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1l-62 17.5L341.4 18.1c-2.1-8.4-8.7-15-17.1-17.3S307 1 301 7.3L256 53.5 211 7.3z" />
        </svg>
      </IconHeader>
      <BoxContainer>
        <ListContainer certs={certifications} />
      </BoxContainer>

      <PageLocation page="About" current="Competitions" />
      <IconHeader text="Competitions" intersect={compeRef}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30"
          width="32"
          fill="#a3fdffe7"
          viewBox="0 0 576 512"
        >
          <path d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z" />
        </svg>
      </IconHeader>
      <ShadedBox>
        <p>
          In my college journey, I have participated in many competitions. Some
          of which are programming competitions as well as others that also
          focus on technologies like 3D design, graphics and hardware
          components. These are some of my notable achievements throughout my
          course.
        </p>
      </ShadedBox>
      <BoxContainer>
        <ListContainer certs={competitions} />
      </BoxContainer>

      <PageLocation page="About" current="Work" />
      <IconHeader text="Work Experience" intersect={workRef}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30"
          width="30"
          fill="#a3fdffe7"
          viewBox="0 0 512 512"
        >
          <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" />
        </svg>
      </IconHeader>
      <BoxContainer>
        <ListContainer certs={works} />
      </BoxContainer>

      <PageLocation page="About" current="Education" />
      <div className="educ-container">
        <IconHeader text="Education" intersect={eduRef}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#a3fdffe7"
            height="30"
            width="28"
            viewBox="0 0 448 512"
          >
            <path d="M219.3 .5c3.1-.6 6.3-.6 9.4 0l200 40C439.9 42.7 448 52.6 448 64s-8.1 21.3-19.3 23.5L352 102.9V160c0 70.7-57.3 128-128 128s-128-57.3-128-128V102.9L48 93.3v65.1l15.7 78.4c.9 4.7-.3 9.6-3.3 13.3s-7.6 5.9-12.4 5.9H16c-4.8 0-9.3-2.1-12.4-5.9s-4.3-8.6-3.3-13.3L16 158.4V86.6C6.5 83.3 0 74.3 0 64C0 52.6 8.1 42.7 19.3 40.5l200-40zM111.9 327.7c10.5-3.4 21.8 .4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6z" />
          </svg>
        </IconHeader>
        <ComboBox
          text="Select Level"
          items={["College", "High School", "Elementary"]}
          action={setLevel}
        />
      </div>

      <BoxContainer>
        <Education level={level} content={educationBackground[level]} />
      </BoxContainer>
      <div
        className="back-to-top"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <IconButton text="Back to Top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            width="18"
            fill="#a3fdffe7"
            viewBox="0 0 448 512"
          >
            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM224 160c6.7 0 13 2.8 17.6 7.7l104 112c6.5 7 8.2 17.2 4.4 25.9s-12.5 14.4-22 14.4H120c-9.5 0-18.2-5.7-22-14.4s-2.1-18.9 4.4-25.9l104-112c4.5-4.9 10.9-7.7 17.6-7.7z" />
          </svg>
        </IconButton>
      </div>
      <hr />
    </div>
  );
}

export default About;
