import './Footer.scss';
import { SITE_LOGO, FOOTER_INFO, CONTACT_INFO } from '../../util/data';
import { Link } from 'react-router-dom';
import SocialMedia from '../SocialMedia/SocialMedia';

function Footer() {
  const { siteImage } = SITE_LOGO[0];
  const { info, widgetLinkTitle, widgetContactTitle } = FOOTER_INFO[0];
  const { mobNumber, emailId } = CONTACT_INFO[0];
  return(
    <footer className='footer-wrapper'>
      <div className='footer-top container'>
        <div className='footer-widget'>
          <Link to='/'><img src={siteImage} alt="Gnanaveedu react website logo" /></Link>
          <p>{ info }</p>
        </div>
        <div className='footer-widget'>
          <h3>{ widgetLinkTitle }</h3>
          <ul className='footer-link-wrapper'>
            <li className='nav-link'>
              <Link to='/'>Home</Link>
            </li>
            <li className='nav-link'>
              <Link to='/about-us'>About</Link>
            </li>
            <li className='nav-link'>
              <Link to='/blogs'>Blogs</Link>
            </li>
            <li className='nav-link'>
              <Link to='/contact-us'>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className='footer-widget'>
          <h3>{ widgetContactTitle }</h3>
          <ul className='contact-list'>
            <li className='mobile-icon'><a href={`tel:${mobNumber}`} target='_blank'><i className='fa fa-volume-control-phone'></i> { mobNumber }</a></li>
            <li className='email-icon'><a href={`mailto:${emailId}`} target='_blank'><i className='fa fa-envelope-o'></i> { emailId }</a></li>
          </ul>
          <SocialMedia />
        </div>
      </div>
      <div className='footer-bottom container'>
        <p>Copyright 2024 Gnana Veedu. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;