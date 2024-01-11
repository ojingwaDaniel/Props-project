import phoneIcon from './images/phone-icon.png'
import emailIcon from './images/email-icon.png'
export default function Contact({img,name,number,email}) {
    return (
      <div className="contact-card">
        <img src={img} className='contact-image' />
            <h3>{name}</h3>
        <div className='phone-details'>
                <img src={phoneIcon}  className='phone-icon'/>
                <p>{number }</p>
        </div>
        <div className='email-details'>
                <img src={emailIcon}  className='email-icon'/>
                <p>{email}</p>
        </div>
      </div>
    );
}