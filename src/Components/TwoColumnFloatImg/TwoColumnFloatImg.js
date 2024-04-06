import './TwoColumnFloatImg.scss';
import { VISION_MISSION_CONTENT } from '../../util/data';
import React, { useEffect, useRef } from 'react';

function TwoColumnFLoatImg() {
  const { animateImg, floatImgOne, floatImgTwo, floatImgThree, floatImgFour, visionLabel, visionTitle, vissionContent, missionLabel, missionTitle, missionContent } = VISION_MISSION_CONTENT[0];
  const sectionRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const sectionHeight = sectionRef.current.offsetHeight;
      const sectionBottom = sectionTop + sectionHeight;
      const parallaxElements = document.querySelectorAll('.shape-img img');

      if (sectionTop <= window.innerHeight && sectionBottom >= 0) {
        parallaxElements.forEach((element) => {
          const speed = parseFloat(element.getAttribute('data-speed'));
          const yPos = -(((scrollY - sectionTop) * speed) / 10); // Calculate translateY based on scroll position and speed
          element.style.transition = 'transform 0.3s ease'; // Add CSS transition for smooth movement
          element.style.transform = `translateY(${yPos}px)`;
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return(
    <section ref={sectionRef} className='two-column-float-img-wrapper'>
      <div className='container'>
        <div className='float-img-wrapper'>
          <div className='shape-img'>
            <img src={floatImgOne} alt='float img of gnanaveedu.org' data-speed='0.3' />
          </div>
          <div className='shape-img'>
            <img src={floatImgTwo} alt='float img of gnanaveedu.org' data-speed='0.6' />
          </div>
          <div className='shape-img'>
            <img src={floatImgThree} alt='float img of gnanaveedu.org' data-speed='0.8' />
          </div>
          <div className='shape-img'>
            <img src={floatImgFour} alt='float img of gnanaveedu.org' data-speed='0.4' />
          </div>
          <div className='shape-bg-img'>
            <div className='animate-img'>
              <img src={animateImg} alt='' />
            </div>
            <div className='shape shape-1'>
              <span className="shape-dot"></span>
            </div>
            <div className='shape shape-2'>
              <span className="shape-dot"></span>
            </div>
          </div>
        </div>
      </div>
      <div className='container two-column'>
        <div className='column-content'>
          <span className='content-label'>{missionLabel}</span>
          <h3>{missionTitle}</h3>
          <p>{missionContent}</p>
        </div>
        <div className='column-content'>
          <span className='content-label'>{visionLabel}</span>
          {visionTitle}
          <p>{vissionContent}</p>
        </div>
      </div>
    </section>
  );
}

export default TwoColumnFLoatImg;