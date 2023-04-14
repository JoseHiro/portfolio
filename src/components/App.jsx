import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Projects from './Projects/Projects';
import Footer from './Footer';
import Profile from './Profile/Profile';
import Home from './Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          {/* <Route path={`/`} element={<Home/>}/> */}
          {/* <Route path={`/`} element={<Projects/>}/> */}
          <Route path={'/'} element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  )
}

export default App;
