import { Link } from "react-router-dom";
import { useState } from "react";

const MOBILELINKS = [{id: 0, name: "Home", address: "/"}, {id: 1, name: "Our Work", address: "/work"}, {id: 2, name: "About", address: "/about"}, {id: 3, name: "News", address: "/news"}, {id: 4, name: "Contact", address: "/contact"}], home ="/";
const Header=({links})=>{
  const DESKTOPNAV = links.map((link)=>(<li key={link.id} className="link"><Link className="linkClass" to={link.address}>{link.name}</Link><span className="underline"></span></li>)), MOBILEMENU = MOBILELINKS.map((link)=>(<li key={link.id} className="link" onClick={()=>{setHamburgerState("hamburger-closed");}}><Link className="linkClass" to={link.address}>{link.name}</Link></li>)), [open, setOpen] = useState("false"), [hamburgerState, setHamburgerState] = useState("hamburger-closed");

  return (
    <header className="header" id="header">
      <Link to={home}><img className="logo" src="./media/logo/candela.png" alt=""/></Link>
      <nav>
        <ul id="desktopNav" className="desktopNav">{DESKTOPNAV}</ul>
        <article className={`${hamburgerState} hamburger`}
          onClick={()=>{
            if (open==="true") {
              setHamburgerState("hamburger-closed");
              setOpen("false");
            } else if  (open === "false") {
              setHamburgerState("hamburger-open");
              setOpen("true");
            }
          }}><span></span><span></span><span></span>
        </article>
      </nav>
      <div className="menu"><ul id="mobileMenu" className={`${hamburgerState} mobileMenu`}>{MOBILEMENU}</ul></div>
    </header>
  )
}
export default Header