import React from 'react';
import Header from './Header';
import Body from './Body';
import Skills from './Footer';
import Contacts from './Contacts';
import './profile.css'

function Profile(){
  return (
    <>
      <div id="profile-container">
        <Header/>
      </div>
      <Body/>
      <Skills/>
      <Contacts></Contacts>

    </>
    )
}
export default Profile;
