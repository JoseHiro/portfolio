import React from 'react';
// import Link from 'react-router-dom';
import TopBody from './Body';
import SecBody from './Sec-Body';
import Footer from './Footer';
import ThirdBody from './Third-body';
import './home.css';


function Home(){
  return (
    <div>
      <TopBody/>
      <SecBody/>
      <ThirdBody/>
      <Footer/>
    </div>
  )
}

export default Home;
