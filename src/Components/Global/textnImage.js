const TextnImage =({year, title, body, image, alt})=> {
  return (
    <article className="textImageBOX">
      <div>
        <p className="top">{year}</p>
        <h5 className="head">{title}</h5>
        <p className="body">{body}</p>
      </div>
      <img src={image} alt={alt}/>
    </article>
  )
}
export default TextnImage