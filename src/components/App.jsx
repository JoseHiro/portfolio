import React from 'react'
import Header from './Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './Projects/Projects';
import Profile from './Profile/Profile';
import Home from './Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
          <Routes>
            <Route path={`/`} element={<Home/>}/>
            <Route path={`/projects`} element={<Projects/>}/>
            <Route path={'/profile'} element={<Profile/>}/>
          </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App;
