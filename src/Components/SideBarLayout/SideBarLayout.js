import './SideBarLayout.scss';
import authorImg from '../../assets/images/about-me.png';
import { BLOGPOST } from '../../util/data';

function BlogItem({blogImg, blogTitle, blogShortDescrp, blogDate}) { 
  return (
    <div className='blog-item'>
      <div className='inner'>
        <div className='thumbnail'>
          <img src={blogImg} alt='blog post of gnanaveedu' />
        </div>
        <div className='content'>
          <ul className='blog-meta'>
            <li><i className='fa fa-calendar'></i> { blogDate }</li>
          </ul>
          <h3>{ blogTitle }</h3>
          <p>{ blogShortDescrp }</p>
        </div>
      </div>
    </div>
  );
}

function SideBarLayout() {
  return (
    <section className='sidebar-layout-wrapper'>
      <div className='container'>
        <div className='sidebarl-layout-row'>
          <div className='grid-list-wrapper'>
            {BLOGPOST.map((blogitem) => (
              <BlogItem key={blogitem.blogId} {...blogitem}></BlogItem>
            ))}
          </div>
          <div className='sidebar-content'>
            <div className='sidebar-widget'>
              <h5>About Author</h5>
              <div className='content'>
                <img src={authorImg} alt='author of gnanaveedu blog posts' />
                <h6>Helenex D. Leona</h6>
                <p>Vesti at bulum nec the odio aea the dumm ipsumm ipsum that dolocons rsus malware suada fadolorit to consectetur</p>
              </div>
            </div>
            <div className='sidebar-widget'>
              <h5>Instagram Feed</h5>
              <div className='content'>
              <iframe src="https://www.instagram.com/meta/embed" title='instagram' width="100%" height="350px"></iframe>

              </div>
            </div>
            <div className='sidebar-widget'>
              <h5>Listen Our Podcast</h5>
              <div className='content'>
              <iframe title='spotify' src="https://open.spotify.com/embed/show/58g95EqsrSk5ViIl3wGDzo?utm_source=generator" width="100%" height="232" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SideBarLayout;