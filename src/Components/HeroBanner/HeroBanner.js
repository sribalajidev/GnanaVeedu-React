// import hero banner style
import './HeroBanner.scss';

// import react components and contents
import { HERO_BANNER } from "../../util/data";
import { Link } from 'react-router-dom';

function HeroBanner() {
  const { imageOne, imageTwo, imagethree, titleSpan, title, description, cta } = HERO_BANNER[0];
  return (
    <section className='hero-banner-wrapper'>
      <div className='container hero-banner-row'>
        <div className='hero-inner-content'>
          <span>{ titleSpan }</span>
          <h3>{ title }</h3>
          <p>{ description }</p>
          <Link className='btn btn-primary' to='/contact-us'>{ cta }</Link>
        </div>
        <div className='hero-img-wrapper'>
          <div className='img-left'>
            <div className='image-w-m'>
              <img src={ imageOne } alt='hero banner image' />
            </div>
            <div className='image-w-s'>
              <img src={ imageTwo } alt='hero banner image' />
            </div>
          </div>
          <div className='img-right'>
            <img src={ imagethree } alt='hero banner image' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;