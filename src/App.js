// import global styling
import './styles/global.scss';

// react component import
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// react pages import
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Blogs from './Pages/Blogs';
import ContactUs from './Pages/ContactUs';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about-us' element={<AboutUs />} />
          <Route path='blogs' element={<Blogs />} />
          <Route path='contact-us' element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}