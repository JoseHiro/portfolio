import React from 'react';
import image1 from '../../img/profile-picture/face1.png';
import image2 from '../../img/profile-picture/face2.png';
import image3 from '../../img/profile-picture/face3.png';
import image4 from '../../img/profile-picture/face4.png';
import image5 from '../../img/profile-picture/face5.png';
import node from '../../img/icons/node-js.png'
// import javascript from '../../img/javascript.png';
import react from '../../img/icons/react.png'

function ProfileImage(){

  let imageNum = Math.floor( Math.random() * 5 );
  console.log(imageNum);
  const images = [image1, image2, image3, image4, image5];

  return (
    <div id="profile-image">
      <div className="background-circle">
        <img className="profile-image" alt="" src={images[imageNum]}></img>
        <img className="icon icon1" alt="" src={node}></img>
        <img className="icon icon2" alt="" src={react}></img>
        {/* <img className="icon icon2" alt="" src={javascript}></img> */}
      </div>
      {/* <img className="icon icon3" alt="" src={javascript}></img> */}
    </div>
  )
}

export default ProfileImage;
