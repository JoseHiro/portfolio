import React, {useState, useEffect}  from 'react'
import Navbar from './Profile/Nav/Navbar'
import MobileNav from './Profile/Nav/Mobile-Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Profile/Footer/Footer';
import Profile from './Profile/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [mobileSize, setSize] = useState(() =>{
    return (window.innerWidth > 620)? false: true;
  });

  function handleResize(){
    (window.innerWidth > 620)? setSize(false): setSize(true);
  }

  useEffect(() =>{
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return (
    <>
      {(!mobileSize)? <Navbar/> : <MobileNav/>}
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Profile screenSize={mobileSize}/>}/>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  )
}

export default App;
