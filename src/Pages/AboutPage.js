import MainLayout from '../Layout/MainLayout';
import TextBOX from '../Components/Global/textBOX';
import TwoSectImgTxtBOX from '../Components/Global/twoSectionImgTxtBox';
import HeadnBgText from '../Components/Global/headnBgText';
import TextnImage from '../Components/Global/textnImage';
import Video from "../Components/Global/video";
import { useState, useRef, useEffect } from "react";
import { motion } from"framer-motion";

const jobsArray  = [
  {id: 0, year: 2021, head: "the first", body: "content of the first", imgSrc: "./media/images/03.jpg", imgAlt: "the first image"},
  {id: 1, year: 2023, head: "the first", body: "content of the first", imgSrc: "./media/images/03.jpg", imgAlt: "the first image"},
  {id: 2, year: 2024, head: "the first", body: "content of the first", imgSrc: "./media/images/03.jpg", imgAlt: "the first image"},
];

const About =()=> {
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

  const links = [{id: 0, name: "Core Competencies", address: "/competencies"}, {id: 1, name: "News", address: "/news"}, {id: 2, name: "Contact", address: "/contact"}];

  return (
    <motion.div initial={{filter:"blur(100px)", height: 0, transition: {duration: .5}}} animate={{filter:"blur(0)", height: "100dvh", overflowX: "hidden"}} exit={{filter:"blur(100px)", height: 0, transition: {duration: .5}}}>
      <span className="overlay"><img src="./media/icons/about.svg" alt="about"/><h1>About Us</h1></span>
      <MainLayout links={links}>
        <div className="videoSection">
          <Video videoLink="./media/video/working-site.mp4"/>
          <h2 className='headText'>Who are we?</h2>
        </div>
        <TextBOX header="Unmatched manpower and machine power" body="lorem ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"/>
        <TwoSectImgTxtBOX/>
        <div className="lineUp">
          {jobsArray.map((job=><TextnImage key={job.id} year={job.year} title={job.head} body={job.body} image={job.imgSrc} alt={job.imgAlt}/>))}
        </div>
        <HeadnBgText id="contact" myRef={sectionRef} slideIn={slideIn}>Contact</HeadnBgText>
      </MainLayout>
    </motion.div>
  )
}
export default About