const cardItems =[
  {id: 0, head: "Expertise in Residential and Commercial Construction",
    imgsrc: "./media/icons/construction-excavator-icon.svg",
    imgalt: "icon", bodytext: "Vision",
    bodypg: " Constructing with integrity, delivering with excellence.",
    view: "column",
    imageSet: [
      {id: 0, imgSrc: "./media/icons/house.svg", num: "+ "+600, area: "Buildings"},
      {id: 1, imgSrc: "./media/icons/building.svg", num: "+ "+20, area: "Industrial facilities"},
      {id: 2, imgSrc: "./media/icons/building-construction-icon.svg", num: "+ "+130, area: "Infrastructure projects"}]
  },
  {id: 1, head: "Personalized approach to meet your unique needs",
    imgsrc: "./media/icons/person-bounding-box.svg",
    imgalt: "icon", bodytext: "User-centered",
    bodypg: "Creating buildings and spaces that meet the needs and expectations of occupants.",
    view: "column-reverse",
    imageSet: [
      {id: 0, imgSrc: "./media/icons/person-hearts.svg", num: " ", area: "Providing excellent customer service, and support."},
      {id: 1, imgSrc: "./media/icons/person-wheelchair.svg", num: " ", area: "Developing new solutions that address user needs."},
      {id: 2, imgSrc: "./media/icons/person-exclamation.svg", num: " ", area: "Clearly communicating projects, timeline, and processes to clients."}]
  },
  {id: 2, head: "Unparalleled Quality and Attention to Detail",
    imgsrc: "./media/icons/search.svg",
    imgalt: "icon", bodytext: "Quality Control",
    bodypg: "Rigorous inspection and testing processes to ensure defects are identified and corrected promptly.",
    view: "column",
    imageSet: [
      {id: 0, imgSrc: "./media/icons/person-workspace.svg", num: " ", area: "Skilled labor, and precise execution in every aspect."},
      {id: 1, imgSrc: "./media/icons/graph-up-arrow.svg", num: " ", area: "Meticulous planning and supervision."},
      {id: 2, imgSrc: "./media/icons/bar-chart.svg", num: " ", area: "Selecting high-quality materials that meet or exceed client expectations."}]
  },
  {id: 3, head: "On-time and on-budget delivery",
    imgsrc: "./media/icons/credit-card.svg",
    imgalt: "icon", bodytext: "Budget Management",
    bodypg: "Delivering projects within the allocated budget, controlling costs, and minimizing unexpected expenses.",
    view: "column-reverse",
    imageSet: [
      {id: 0, imgSrc: "./media/icons/hand-money-income-note-icon.svg", num: 70+"%", area: "profits on prevoius projects"},
      {id: 1, imgSrc: "./media/icons/builder-icon.svg", num: " ", area: "Highly qualified accounts management team"},
      {id: 2, imgSrc: "./media/icons/person-check.svg", num: " ", area: "Meeting client expectation through timely and cost-effective delivery"}]
  }
]

const ImgTxt=({imgSrc, ImgAlt, bodyTxt, bodyPg})=>{
  return (
    <article className="imageTxt">
      <img className="resImg" src={imgSrc} alt={ImgAlt}/>
      <div>
        <h6 className="resMiniHd">{bodyTxt}</h6>
        <p className="resMiniPg">{bodyPg}</p>
      </div>
    </article>
  )
}

const Article =({list})=>{
  return (list.map((item)=>(
    <article key={item.id}>
      <img className="resImg" src={item.imgSrc} alt=""/>
      <h4 className="resMiniHd">{item.num}</h4>
      <p className="resMiniPg">{item.area}</p>
    </article>
  )))
}

const ArrayOfCards=({myRef, animateIn})=>{
  return (
    <section className="arrayOfCards">
      {cardItems.map((item)=>(
        <article  ref={myRef} key={item.id} className={`${animateIn} cards`}>
          <h4 className="resMiniHd1">{item.head}</h4>
          <div className={item.view+ " spaced"}>
            <div className="resGrid"><Article list={item.imageSet}/></div>
            <ImgTxt imgSrc={item.imgsrc} ImgAlt={item.imgalt} bodyTxt={item.bodytext} bodyPg={item.bodypg}/>
          </div>
        </article>
      ))}
    </section>
  )
}
export default ArrayOfCards