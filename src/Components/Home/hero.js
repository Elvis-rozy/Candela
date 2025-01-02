import ArrayOfCards from "../Global/arrayOfCards";
import Button from "../Global/button";
import { useState, useRef, useEffect } from "react";

const Hero=()=>{
  const [animateIn, setAnimateIn] = useState("animateOut");

  const handleAnimateIn =(value)=>{
    setAnimateIn(value);
  }
  const sectionRef = useRef();

  useEffect(()=>{
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => entry.isIntersecting ? handleAnimateIn("animateIn") : handleAnimateIn("animateOut"));
    });
    sectionObserver.observe(sectionRef.current);
  }, []);

  return (
    <section>
      <div className="hero">
        <span className="bg1"></span><span className="stamp"></span><span className="bg2"></span>
        <article className="content">
          <h1 className="heroHdr">Your <strong className="highlight">Vision-</strong><br/>-Our <strong className="highlight">Blueprint.</strong>  </h1>
          <p className="heroPg">Constructing Excellence, from the ground up.</p>
          <Button buttonType=""  buttonClass="heroBtn" linkAddress="/contact"  iconLink="./media/icons/arrow-right.svg" iconAlt="">Let's Build</Button>
        </article>
        <Button buttonType=""  buttonClass="circButton ctct" linkAddress="/contact"  iconLink="./media/icons/telephone.svg" iconAlt=""/>
      </div>
      <div id="resources" className="resourcesSection">
        <h5 className="resMainHd">Transforming spaces, exceeding expectations.</h5>
        <p className="resMainPg">At Candela, we are dedicated to delivering exceptional construction services that bring your vision to life. With expertise, passion, and a commitment to excellence, we'll guide you through every step of the process.</p>
        <ArrayOfCards myRef={sectionRef} animateIn={animateIn}/>
      </div>
    </section>
  )
}
export default Hero