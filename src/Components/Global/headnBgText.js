import { Link } from "react-router-dom"

const HeadnBgText=({address, id, myRef, children, slideIn})=>{
  return (
    <Link to={address} id={id} ref={myRef} className="container">
      <h4 className="head">{children}</h4>
      <h4 className={`${slideIn} bigText`}>{children}</h4>
    </Link>
  )
}
export default HeadnBgText