// import styles and images
import './Header.scss';

// import react components and hooks
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SITE_LOGO } from '../../util/data';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { siteImage } = SITE_LOGO[0];
  const locationPage = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isHeaderScrolled = scrollTop > 130;
      setIsScrolled(isHeaderScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`navigation-wrapper ${isScrolled ? 'header-sticky' : ''}`}>
      <nav className='main-navigation container'>
        <div className='site-brand-logo'>
          <Link to='/'><img src={siteImage} alt="Gnanaveedu react website logo" /></Link>
        </div>
        <ul className='nav-items'>
          <li className={`nav-link home ${locationPage.pathname === '/' ? 'active' : ''}`}>
            <Link to='/'>Home</Link>
          </li>
          <li className={`nav-link about ${locationPage.pathname === '/about-us' ? 'active' : ''}`}>
            <Link to='/about-us'>About Us</Link>
          </li>
          <li className={`nav-link blog ${locationPage.pathname === '/blogs' ? 'active' : ''}`}>
            <Link to='/blogs'>Blogs</Link>
          </li>
          <li className={`nav-link contact ${locationPage.pathname === '/contact-us' ? 'active' : ''}`}>
            <Link to='/contact-us'>Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;