import {  Routes, Route, useLocation } from "react-router-dom";
import App from '../App';
import About from '../Pages/AboutPage';
import Work from '../Pages/CompetencyPage';
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
        <Route path= "work" element={<Work/>} />
      </Routes>
    </AnimatePresence>
  )
}
export default AnimatedRoutes