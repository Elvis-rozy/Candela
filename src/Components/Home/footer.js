import { Link } from "react-router-dom";

const Footer =()=> {
  const icons = [{id: 0, name: "facebook", src: "./media/icons/twitter-x.svg"}], home ="/";
  let current = "#";
  return (
    <section className="footer">
      <span><Link to={home}><img className="logo" src="./media/logo/kandela-svg.png" alt=""/></Link></span>
      <h6 className="above">&copy; 2024 Candelar Constructions Nig Ltd<br/>All rights reserved.</h6>
      <ul className="above"><li>Data protection</li><li>Contact</li><li>Sitemap</li></ul>
      <div className="above">{icons.map(icon=>(<img key={icon.id} src={icon.src} alt={icon.name}/>))}</div>
      <a href={current} className="above back2top">Back to top</a>
    </section>
  )
}
export default Footer