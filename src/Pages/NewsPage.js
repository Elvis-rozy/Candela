import HeadnBgText from '../Components/Global/headnBgText';
import Card from '../Components/Global/card';
import MainLayout from '../Layout/MainLayout';
import HeaderText from '../Layout/headerText';
import { useState, useRef, useEffect } from "react";
import { motion } from"framer-motion";

const newsUpdates = [
  0, 1, 2, 3, 4, 5, 6
];

const News =()=> {
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

  const links = [{id: 0, name: "Core Competencies", address: "/competencies"}, {id: 1, name: "About", address: "/about"}, {id: 2, name: "Contact", address: "/contact"}];

  return (
    <motion.div initial={{filter:"blur(100px)", height: 0, transition: {duration: .5}}} animate={{filter:"blur(0)", height: "100dvh", overflowX: "hidden"}} exit={{filter:"blur(100px)", height: 0, transition: {duration: .5}}}>
      <span className="overlay"><img src="./media/icons/news.svg" alt="about"/><h1>News Updates</h1></span>
      <MainLayout links={links}>
        <HeaderText text="news & happenings"/>
        <section className="updates">
          <ul className="btnLinks">
            <li className="active">All</li>
            <li>Company</li>
            <li>Social</li>
            <li>Projects</li>
          </ul>
          <div className="display">
            {newsUpdates.map((update=><Card key={update} claz="card"/>))}
          </div>
        </section>
        <HeadnBgText id="contact" myRef={sectionRef} slideIn={slideIn}>Contact</HeadnBgText>
      </MainLayout>
    </motion.div>
  )
}
export default News