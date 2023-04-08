import React from 'react';
import image from '../../img/face2.png';
import node from '../../img/icons/node-js.png'
// import javascript from '../../img/javascript.png';
import react from '../../img/icons/react.png'

function ProfileImage(){
  return (
    <div id="profile-image">
      <div className="background-circle">
        <img className="profile-image" alt="" src={image}></img>
        <img className="icon icon1" alt="" src={node}></img>
        <img className="icon icon2" alt="" src={react}></img>
        {/* <img className="icon icon2" alt="" src={javascript}></img> */}
      </div>
      {/* <img className="icon icon3" alt="" src={javascript}></img> */}
    </div>
  )
}

export default ProfileImage;
