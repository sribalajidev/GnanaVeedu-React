import './VideoContent.scss';
import { VIDEO_CONTENT } from '../../util/data';
import React, { useState } from 'react';

function VideoContent() { 
  const { contentLabel, contentTitle, contentDescrip, videoImg, videoIframe } = VIDEO_CONTENT[0];
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
    document.body.classList.add('overflow-hidden');
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    document.body.classList.remove('overflow-hidden');
  };

  return (
    <>
    <section className='video-content-wrapper'>
      <div className='container two-column'>
        <div className='content-wrapper'>
          <span className='content-label'>{ contentLabel }</span>
          <h3>{ contentTitle }</h3>
          <p>{ contentDescrip }</p>
          <a href="https://docs.google.com/forms/" target='_blank' rel="noreferrer" className='btn btn-secondary'>Enroll Now</a>
        </div>
        <div className='video-img-wrapper'>
          <img src={ videoImg } alt='Video Content popup' />
          <div className='video-play' onClick={openPopup}>
            <i className='fa fa-play'></i>
          </div>
        </div>
      </div>
    </section>
    <div className={`video-popup ${isPopupOpen ? 'show-popup' : ''}`}>
      <div className='popup-block'>
        <button className='close-icon' onClick={closePopup}>x</button>
        <div className='video-block'>
          {videoIframe}
        </div>
      </div>
    </div>
    </>
  );
}

export default VideoContent;