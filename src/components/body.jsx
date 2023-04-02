import React from 'react';
import image from '../img/retro_bg_17.png'


function TopBody(){
  return (
    <div className="body-contents" style={{ backgroundImage: `url(${image})`}}>
      <h3>Welcome to my page</h3>
      <div className="nav-sub-contents">
        <h4>Github</h4>
        <h4>Linkedin</h4>
        <h4>Websites</h4>
      </div>
    </div>
  )
}


export default TopBody
