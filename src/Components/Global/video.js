const Video=({videoLink})=>{
  return (
    <section className="vid">
      <video className="video" src={videoLink} autoPlay loop muted></video>
      <span></span>
    </section>
  )
}
export default Video