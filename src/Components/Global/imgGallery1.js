const SERIES = [0, 1, 2];

const ImgGallery1 = () => {
  return (
    <article  className="imgGallery ">
      {SERIES.map((serie)=>(
        <article key={serie} className="set">
          <img className="imgA" src="./media/images/07.jpg" alt=""/>
          <img className="imgB" src="./media/images/03.jpg" alt=""/>
          <div className="textBox">
            <h5>check out our portfolio to see the quality of our work</h5>
            <span>
              <h4>118</h4>
              <p>projects in 2023</p>
            </span>
          </div>
        </article>
      ))}
    </article>
  )
}
export default ImgGallery1