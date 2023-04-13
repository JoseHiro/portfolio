import React from 'react';
import Header from './Header/Header';
import Body from './History/History';
import Skills from './Skills/Skills';
import Contacts from './Contact/Contacts';
import Projects from './Projects/Projects';
import './profile.css'

function Profile(){
  return (
    <>
      <div id="profile_container">
        <Header/>
      </div>
      <Body/>
      <Projects/>
      <Skills/>
      <Contacts></Contacts>
    </>
    )
}
export default Profile;
