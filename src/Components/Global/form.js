import Button from "./button"
import { useRef } from "react"

const ContactForm = ({tabHead, tabPG, claz}) => {
  const form = useRef();

  const sendEmail =()=>{
    console.log("submitted");
  };

  return (
    <section className={claz}>
      <h3 className="subtitl">Subject</h3>
      <h2 className="titl">{tabHead}</h2>
      <p className="inqPg">{tabPG}</p>
      <form ref={form} id="form" onSubmit={sendEmail}>
        <div className="input-box">
          <input id="name" type="text" name="name" placeholder="Name"/>
          <label htmlFor="name">Name*</label>
        </div>
        <div className="input-box">
          <input id="phone" type="number" name="phone" placeholder="Phone"/>
          <label htmlFor="phone">Phone</label>
        </div>
        <div className="input-box">
          <input id="email" type="email" name="email" placeholder="johnny.depp@example.com"/>
          <label htmlFor="email">Email*</label>
        </div>
        <div className="input-box">
          <textarea id="message" rows="4" type="text" name="message" placeholder="How can we help you?"/>
          <label htmlFor="message">Message</label>
        </div>
        <div className="confirmation">
          <label htmlFor="checkbox"><input className="checkbox" type="checkbox"/>I have read and understood the<a className="privacyPolicy" href="/"> privacy policy</a>.*</label>
        </div>
        <Button buttonType="submit" buttonClass="btnSize send" linkAddress="" iconLink="" iconAlt="">Send</Button>
      </form>
    </section>
  )
}
export default ContactForm