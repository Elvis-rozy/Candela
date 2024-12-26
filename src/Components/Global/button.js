import { Link } from "react-router-dom"

const Button=({buttonType, buttonClass, linkAddress, iconLink, iconAlt, func, children})=>{
  return (
    <Link to={linkAddress}>
      <button type={buttonType} className={buttonClass} onClick={func}>
        {children}
        <img src={iconLink} alt={iconAlt}/>
      </button>
    </Link>
  )
}
export default Button