import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Other from "./components/Other";

function App() {
  const [currentpage, setCurrentPage] = useState("home");
  const [intersecting, setIntersecting] = useState("");

  const handlePage = (page) => {
    setCurrentPage(page);
  }

  const handleIntersect = (element) => {
    setIntersecting(element);
  }

  return (
    <>
      <Header goto={handlePage}/>
      <Content page={currentpage} intersecting={handleIntersect}/>
      {currentpage !== "home" ? <Other intersecting={intersecting} current={currentpage}/> : undefined}
    </>
  );
}

export default App;
