import React from 'react';
import Header from './Header';
import Skills from './Footer';
import './profile.css'

function Profile(){
  return (
    <>
      <div id="profile-container">
        <Header/>
      </div>
      <Skills/>
    </>
    )
}
export default Profile;
