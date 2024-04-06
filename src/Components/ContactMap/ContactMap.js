import './ContactMap.scss';
import { CONTACT_PAGE } from '../../util/data';

function ContactInfoItem({ contactId, contactIcon, contactTitle, contactDescrip }) {
  return (
    <div className='contact-info-item'>
      <div className='item-icon'>
        { contactIcon }
      </div>
      <div className='item-info'>
        <h4>{ contactTitle }</h4>
        { contactDescrip }
      </div>
    </div>
  );
}
function ContactMap() {
  return(
    <section className='contact-info-wrapper'>
      <div className='container'>
        <div className='contect-header'>
          <span className='content-label'>Contact Us</span>
          <h3>We'd love to hear from you</h3>
        </div>
        <div className='contact-info-list'>
          {CONTACT_PAGE.map((infoItem) => (
            <ContactInfoItem key={infoItem.contactId} {...infoItem} ></ContactInfoItem>
          ))}
        </div>
      </div>
        <div className='map-wrapper'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248755.7947640987!2d80.04420024126021!3d13.047807809660773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1711942921595!5m2!1sen!2sin" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>
  );
}

export default ContactMap;