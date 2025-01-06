import MainLayout from '../Layout/MainLayout'
import ContactForm from '../Components/Global/form'
import Button from '../Components/Global/button'
import { useState } from 'react';
import { motion } from"framer-motion";

const difInquiries = [
  {id: 0, tabHead: "General Inquiries", tabPg: "Seeking general information about candelar, it's services, or projects? This includes potential clients, partners, or individuals looking for basic information."},
  {id: 1, tabHead: "Technical Inquiries", tabPg: "Are you an industry professional, client or contractor seeking specific technical information related to construction projects?"},
  {id: 2, tabHead: "Press Inquiries", tabPg: "Media representatives, journalists, or influencers seeking information, interviews, or press releases about candelar's projects, achievements, or industry insights."},
  {id: 3, tabHead: "Investor Relations", tabPg: "Are you an investor, analyst, or financial institution interested in learning more about candelar's financial performance, investment opportunities, or partnership possibilities?"},
  {id: 4, tabHead: "Job Applications", tabPg: "Are you interested in exploring career opportunities within candelar, submitting resumes, or applying for specific job openings?"},
  {id: 5, tabHead: "Become a supplier", tabPg: "Are you an individual or company interested in providing goods or services to candelar, such as materials, equipment, or subcontracting services?"}
];

const Contact =()=> {
  const [tabHead, setTabHead] = useState("General Inquiries");
  const [tabPG, setTabPG] = useState("Seeking general information about candelar, it's services, or projects. This includes potential clients, partners, or individuals looking for basic information.");

  const handleTabPG =(input1, input2)=>{
    setTabHead(input1);
    setTabPG(input2);
  }

  const links = [{id: 0, name: "Our Work", address: "/work"}, {id: 1, name: "About", address: "/about"}, {id: 2, name: "News", address: "/news"}];

  return (
    <motion.div initial={{filter:"blur(100px)", height: 0, transition: {duration: .5}}} animate={{filter:"blur(0)", height: "100dvh", overflowX: "hidden"}} exit={{filter:"blur(100px)", height: 0, transition: {duration: .5}}}>
      <span className="overlay"><img src="./media/icons/telephone2.svg" alt="about"/><h1>Contact Us</h1></span>
      <MainLayout links={links}>
        <section className="contactSection">
          <div className='tabs'>
            {difInquiries.map((tab)=>(<Button key={tab.id} buttonClass="btnSize rectButton" func={()=>{handleTabPG(tab.tabHead, tab.tabPg)}}>{tab.tabHead}</Button>))}
          </div>
          <div className="inputDetails">
            <ContactForm tabHead={tabHead} tabPG={tabPG} claz="form"/>
            <img className="right" src="./media/images/hg.jpg" alt=""/>
          </div>
        </section>
      </MainLayout>
    </motion.div>
  )
}
export default Contact