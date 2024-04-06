// React Component Import
import { useLocation, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import Header from "../Components/Header/Header";
import Footer from '../Components/Footer/Footer';

const Layout = () => {
  const location = useLocation();
  // const [fade, setFade] = useState(false);

  // Scroll to top and set fade effect to true when navigating to a new page
  useEffect(() => {
    window.scrollTo(0, 0);
    // setFade(true); // Apply fade-out effect
    // const timeout = setTimeout(() => {
    //   setFade(false);
    // }, 500);
    // return () => clearTimeout(timeout); // Cleanup
  }, [location.pathname]);

  return (
    <>
    <div className={`page-layout-wrapper ${location.pathname === '/' ? 'home-page' : ''}`}>
      <Header />
      <Outlet />
      <Footer />

      {/* {fade ? null : (
        <>
        </>
      )} */}

    </div>
    </>
  )
};

export default Layout;