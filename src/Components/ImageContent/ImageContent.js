import { Link } from 'react-router-dom';
import './ImageContent.scss';
import { ABOUT_INFO } from '../../util/data';

function ImageContent() {
  const { aboutImgOne, aboutImgtwo, aboutTitle, aboutDescrip } = ABOUT_INFO[0];
  return(
    <section className='image-content-wrapper'>
      <div className='container two-column'>
        <div className='image-wrapper'>
          <img src={aboutImgOne} alt='image content' className='relative-img' />
          <img src={aboutImgtwo} alt='image content' className='overlay-img' />
        </div>
        <div className='content-info'>
          <span className='content-label'>About Us</span>
          <h3>{aboutTitle}</h3>
          <p>{aboutDescrip}</p>
          <Link to='/about-us' className='btn btn-primary'>Know About Us</Link>
        </div>
      </div>
    </section>
  );
}

export default ImageContent;