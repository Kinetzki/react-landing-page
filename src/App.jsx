import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Other from "./components/Other";
import { useMediaQuery } from "react-responsive";

function App() {
  const [currentpage, setCurrentPage] = useState("home");
  const [intersecting, setIntersecting] = useState("");
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [currentpage]);

  const handlePage = (page) => {
    setCurrentPage(page);
  };

  const handleIntersect = (element) => {
    setIntersecting(element);
  };

  return (
    <>
      <Header goto={handlePage} mobile={isMobile}/>
      <Content page={currentpage} intersecting={handleIntersect} />
      {(currentpage !== "home" && !isMobile )? (
        <Other intersecting={intersecting} current={currentpage}/>
      ) : undefined}
    </>
  );
}

export default App;
