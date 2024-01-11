import contactImage  from './images/contact-1.jpg'
import phoneIcon from './images/phone-icon.png'
import emailIcon from './images/email-icon.png'
export default function Contact() {
    return (
      <div className="contact-card">
        <img src={contactImage} />
        <h3>Mr Broda Shaggi</h3>
        <div>
                <img src={phoneIcon} />
                <p>08101338296</p>
        </div>
        <div>
                <img src={emailIcon} />
                <p>brodashaggi@gmail.com</p>
        </div>
      </div>
    );
}