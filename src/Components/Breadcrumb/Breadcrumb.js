import './Breadcrumb.scss';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Breadcrumb() {
  const location = useLocation();
  const pageTitle = location.pathname
  .split('/')
  .filter(Boolean)
  .map((segment) => segment.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase()))
  .join(' ');

  return(
    <section className='breadcrumb-wrapper'>
      <div className='container'>
        <h3>{pageTitle}</h3>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li className='separator'><i className='fa fa-chevron-right'></i></li>
          <li>{pageTitle}</li>
        </ul>
      </div>
    </section>
  );
}

export default Breadcrumb;