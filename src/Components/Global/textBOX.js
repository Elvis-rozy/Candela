const TextBOX = ({header, body}) => {
  return (
    <article className="textBOX">
      <h4 className="titleH4">{header}</h4>
      <p>{body}</p>
    </article>
  )
}
export default TextBOX