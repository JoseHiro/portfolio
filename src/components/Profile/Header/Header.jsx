import React from 'react';
import ProfileImage from './Profile-photo';
import Buttons from './Buttons';
import './header.css';

function Header(){
  return <section className="container" id="profile_container">
    <ProfileImage></ProfileImage>
    <Buttons></Buttons>
  </section>
}

export default Header;
