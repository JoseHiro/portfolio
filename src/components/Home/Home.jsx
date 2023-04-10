import React from 'react';
// import Link from 'react-router-dom';
import TopBody from './Body';
import SecBody from './Sec-Body';
import ThirdBody from './Third-body';
import './home.css';


function Home(){
  return (
    <div>
      <TopBody/>
      <SecBody/>
      <ThirdBody/>
    </div>
  )
}

export default Home;
