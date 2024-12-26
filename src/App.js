import HeadnBgText from "./Components/Global/headnBgText";
import Hero from "./Components/Home/hero";
import { useState, useRef, useEffect } from "react";
import MainLayout from './Layout/MainLayout'
import "./Sass/styles.scss";

function App() {
  const [slideIn, setSlideIn] = useState("slideOut"), sectionRef = useRef();

  const handleSlideIn =(value)=>{
    setSlideIn(value);
  }

  useEffect(()=>{
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => entry.isIntersecting ? handleSlideIn("slideIn") : handleSlideIn("slideOut"));
    });
    sectionObserver.observe(sectionRef.current);
  }, []);

  const links = [{id: 0, name: "Core Competencies", address: "/competencies"}, {id: 1, name: "About", address: "/about"}, {id: 2, name: "News", address: "/news"}, {id: 3, name: "Contact", address: "/contact"}];

  return (
    <MainLayout links={links}>
      <Hero/>
      <HeadnBgText address="/news" id="news" myRef={sectionRef} slideIn={slideIn}>News</HeadnBgText>
    </MainLayout>
  );
}
export default App;