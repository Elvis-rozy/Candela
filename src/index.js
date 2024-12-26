/* import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './Pages/AboutPage';
import Contact from './Pages/ContactPage';
import News from './Pages/NewsPage';
import Resources from './Pages/ResourcesPage';
import Competency from './Pages/CompetencyPage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {path: "/", element: <App/>}, {path: "about", element: <About/>},
  {path: "contact", element: <Contact/>}, {path: "news", element: <News/>},
  {path: "competencies", element: <Competency/>}, {path: "resources", element: <Resources/>},
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
 */


import AnimatedRoutes from './Components/animatedRoutes';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AnimatedRoutes/>
    </Router>
  </React.StrictMode>
);