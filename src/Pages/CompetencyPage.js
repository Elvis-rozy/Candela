import MainLayout from '../Layout/MainLayout';
import TextBOX from '../Components/Global/textBOX';
import CaseStudies from "../Components/Global/caseStudies";
import HeadnBgText from '../Components/Global/headnBgText';
import SubHeading1 from "../Components/Global/subHeading1";
import { useState, useRef, useEffect } from "react";
import { motion } from"framer-motion";

const Competency =()=> {
  const [slideIn, setSlideIn] = useState("slideOut");

  const handleSlideIn =(value)=>{
    setSlideIn(value);
  }
  const sectionRef = useRef();

  useEffect(()=>{
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => entry.isIntersecting ? handleSlideIn("slideIn") : handleSlideIn("slideOut"));
    });
    sectionObserver.observe(sectionRef.current);
  }, []);

  const links = [{id: 0, name: "About", address: "/about"}, {id: 1, name: "News", address: "/news"}, {id: 2, name: "Contact", address: "/contact"}];

  return (
    <motion.div initial={{filter:"blur(100px)", height: 0, transition: {duration: .5}}} animate={{filter:"blur(0)", height: "100dvh", overflowX: "hidden"}} exit={{filter:"blur(100px)", height: 0, transition: {duration: .5}}}>
      <span className="overlay"><img src="./media/icons/services.svg" alt="about"/><h1>Specialization</h1></span>
      <MainLayout links={links}>
        <SubHeading1 id="competencies" clas="subHeading1" head="Core Competencies" rightPg="VIEW OUR AREAS OF EXPERTISE"/>
        <section className="grid">
          <div className="left">
            <p>Residential Buildings</p>
            <img src="./media/images/01.jpg" alt=""/>
          </div>
          <div className="right">
            <img src="./media/images/uu.jpg" alt=""/>
            <p>Commercial and industrial buildings</p>
          </div>
          <div className="left">
            <p>Government and Infrastructural projects</p>
            <img src="./media/images/n.jpg" alt=""/>
          </div>
          <div className="right">
            <img src="./media/images/l.jpg" alt=""/>
            <p>Landscaping</p>
          </div>
        </section>
        <TextBOX header="We specialize in executing complex and bold engineering challenges" body="At Candela, we've built our reputation on delivering exceptional construction services that exceed our client's expectations. Our core competencies are the foundation of our success, and they enable us provide top-notch solutions for even the most complex projects."/>
        <CaseStudies/>
        <HeadnBgText address="/contact" id="contact" myRef={sectionRef} slideIn={slideIn}>Contact</HeadnBgText>
      </MainLayout>
    </motion.div>
  )
}
export default Competency