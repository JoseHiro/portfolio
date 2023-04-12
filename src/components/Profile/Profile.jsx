import React from 'react';
import Header from './Header/Header';
import Body from './Body/Body';
import Skills from './Skills/Skills';
import Contacts from './Contact/Contacts';
import './profile.css'

function Profile(){
  return (
    <>
      <div id="profile_container">
        <Header/>
      </div>
      <Body/>
      <Skills/>
      <Contacts></Contacts>
    </>
    )
}
export default Profile;
