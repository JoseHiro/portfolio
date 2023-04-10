import React from 'react';
import Header from './Header';
import Body from './Body';
import Skills from './Footer';
import './profile.css'

function Profile(){
  return (
    <>
      <div id="profile-container">
        <Header/>
      </div>
      <Body/>
      <Skills/>
    </>
    )
}
export default Profile;
