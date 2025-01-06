import MainLayout from '../Layout/MainLayout';
import TextBOX from '../Components/Global/textBOX';
import TwoSectImgTxtBOX from '../Components/Global/twoSectionImgTxtBox';
import HeadnBgText from '../Components/Global/headnBgText';
import TextnImage from '../Components/Global/textnImage';
import Video from "../Components/Global/video";
import { useState, useRef, useEffect } from "react";
import { motion } from"framer-motion";

const ceoArray  = [
  {id: 0, role: "President and CEO", head: "Jane Abayomi", body: "Jane is the president and CEO of candela construction limited, a leading firm in Nigeria. With over 5 years of experience in the industry, Jane has established herself as a respected leader and expert in construction managment. She hold a bachelor's degree in construction management from Kwara state university and is a licensed general contractor. Under john's leadership, candela has delivered numerous high-profile projects and has received several industry awards.", imgSrc: "./media/images/ceo_1.jpeg", imgAlt: "the first image"},
  {id: 1, role: "Project Manager", head: "Philip Reeves", body: "Philip is a project Manager at candela construction limited, where he oversees the planning, coordination, and execution of construction projects. Philip has over 10 years of experience in the industry, with a strong background in project management, scheduling, and budgeting. He holds a bachelor's degree in civil engineering from the University of Abuja, and is a certified Project Management Professional (PMP). Philip is known fro his attention to detail, excellent communication skills, and ability to deliver projects on time and within budget.", imgSrc: "./media/images/ceo_2.jpg", imgAlt: "the first image"},
  {id: 2, role: "Senior Estimator", head: "Hassan Al-Habib", body: "Hassan is a Senior Estimator at Candela Construction limited, responsible for preparing detailed estimates for construction projects. With over 15 years of experience in the industry, Hassan has developed a strong expertise in the estimating, cost management, and value engineering. He holds a bachelor's degree in construction management from the University of Benin, and is a certified Professional Estimator (PE). Hassan is recognised for his accuracy, attention to details, and ability to provide creative solutions to complex estimating challenges.", imgSrc: "./media/images/ceo_3.jpg", imgAlt: "the first image"},
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

  const links = [{id: 0, name: "Our Work", address: "/work"}, {id: 1, name: "News", address: "/news"}, {id: 2, name: "Contact", address: "/contact"}];

  return (
    <motion.div initial={{filter:"blur(100px)", height: 0, transition: {duration: .5}}} animate={{filter:"blur(0)", height: "100dvh", overflowX: "hidden"}} exit={{filter:"blur(100px)", height: 0, transition: {duration: .5}}}>
      <span className="overlay"><img src="./media/icons/about.svg" alt="about"/><h1>About Us</h1></span>
      <MainLayout links={links}>
        <div className="videoSection">
          <Video videoLink="./media/video/working-site.mp4"/>
          <h2 className='headText'>Who are we?</h2>
        </div>
        <TextBOX header="Our Story" body="At Candela, we've been building more than just structures - we've been building relationships, communities, and a better future for all. Founded in 2024 by John Doe, Our company has grown from a small team of passionate builders to one of the leading construction firms in Nigeria."/>
        <TwoSectImgTxtBOX/>
        <div className="lineUp">
          <h2 className='headText'>Our Team</h2>
          {ceoArray.map((personnel=><TextnImage key={personnel.id} year={personnel.role} title={personnel.head} body={personnel.body} image={personnel.imgSrc} alt={personnel.imgAlt}/>))}
        </div>
        <HeadnBgText id="contact" myRef={sectionRef} slideIn={slideIn}>Contact</HeadnBgText>
      </MainLayout>
    </motion.div>
  )
}
export default About