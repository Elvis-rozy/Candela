const Card =({claz})=> {
  return (
    <article className={claz}>
      <img className="cardImg" src="./media/images/001.jpg" alt=""/>
      <h5 className="cardHd">title</h5>
      <p className="cardPg">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
      <h5 className="cardTl">date</h5>
    </article>
  )
}
export default Card