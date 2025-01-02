const GALLERY = [
  {
    id : 0,
    title : "Residential",
    image1 : "./media/images/07.jpg",
    image2 : "./media/images/03.jpg",
    projects : 12
  },
  {
    id : 1,
    title : "Commercial",
    image1 : "./media/images/nk.jpg",
    image2 : "./media/images/5.jpg",
    projects : 65
  },
  {
    id : 2,
    title : "Infrastructure",
    image1 : "./media/images/mb.jpg",
    image2 : "./media/images/r.jpg",
    projects : 71
  }
];

const ImgGallery1 = () => {
  return (
    <article  className="imgGallery ">
      {GALLERY.map((gall)=>(
        <article key={gall.id} className="set" id={gall.id}>
          <img className="imgA" src={gall.image1} alt=""/>
          <img className="imgB" src={gall.image2} alt=""/>
          <div className="textBox">
            <h2>{gall.title}</h2>
            <h6>check out our portfolio to see the quality of our work</h6>
            <span>
              <h4>{gall.projects}</h4>
              <p>projects in 2024</p>
            </span>
          </div>
        </article>
      ))}
    </article>
  )
}
export default ImgGallery1