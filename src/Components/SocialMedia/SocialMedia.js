import './SocialMedia.scss';
import { SOCIAL_MEDIA_LINKS } from '../../util/data';

function SocialMedia() {
  const { fbLink, instaLink, twitterLink, youtubeLink } = SOCIAL_MEDIA_LINKS[0];
  return(
    <ul className='social-media-wrapper'>
      <li><a href={fbLink} target='_blank'><i className='fa fa-facebook'></i></a></li>
      <li><a href={ instaLink } target='_blank'><i className='fa fa-instagram'></i></a></li>
      <li><a href={ twitterLink } target='_blank'><i className='fa fa-twitter'></i></a></li>
      <li><a href={ youtubeLink } target='_blank'><i className='fa fa-youtube'></i></a></li>
    </ul>
  );
}

export default SocialMedia;