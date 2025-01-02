const TwoSectImgTxtBOX = ({imgSrc, ImgAlt, header, body}) => {
  return (
    <section className="twoSectImgTxtBOX">
      <article>
        <h3>Our Mission</h3>
        <p className="pg">Our mission is to deliver exceptional construction services that exceed our client's expectations. We're committed to safety, quality, and sustainability in every project we undertake. Whether it's a residential home, commercial building, or infrastructural project, we're dedicated to building structures that stand the test of time.</p>
        <img className="img1" src="./media/images/welders.jpg" alt="" />
      </article>
      <article>
        <img className="img2" src="./media/images/site1.jpg" alt="" />
        <h3>Our Values</h3>
        <ul>
          <li>
            <h5>Safety First</h5>
            <p>We prioritize the safety of our employees, clients, and the communitiees we serve.</p>
          </li>
          <li>
            <h5>Quality Excellence</h5>
            <p>We strive for excellence in eveery aspect of work, from planning to execution.</p>
          </li>
          <li>
            <h5>Sustainability</h5>
            <p>We're committed to reducing our environmental footprint and promoting sustainable building practices.</p>
          </li>
          <li>
            <h5>Integrity</h5>
            <p>We operate with transparency, honesty, and integrity in all our business dealings.</p>
          </li>
          <li>
            <h5>Teamwork</h5>
            <p>We believe that collaboration and teamwork are essential to delivering exceptional results.</p>
          </li>
        </ul>
      </article>
    </section>
  )
}
export default TwoSectImgTxtBOX