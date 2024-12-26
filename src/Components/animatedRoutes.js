import {  Routes, Route, useLocation } from "react-router-dom";
import App from '../App';
import About from '../Pages/AboutPage';
import Competency from '../Pages/CompetencyPage';
import Contact from '../Pages/ContactPage';
import News from "../Pages/NewsPage";
import {AnimatePresence} from "framer-motion"

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path= "/" element={<App/>} />
        <Route path= "about" element={<About/>} />
        <Route path= "contact" element={<Contact/>} />
        <Route path= "news" element={<News/>} />
        <Route path= "competencies" element={<Competency/>} />
      </Routes>
    </AnimatePresence>
  )
}
export default AnimatedRoutes