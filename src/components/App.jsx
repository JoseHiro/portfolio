import React from 'react'
import Header from './Header'
import TopBody from './Body';
import SecBody from './Sec-Body';
import Footer from './Footer';
import ThirdBody from './Third-Body';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header/>
      <TopBody/>
      <SecBody/>
      <ThirdBody/>
      <Footer/>
    </div>

  )
}

export default App;
