import React from 'react';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import Body from './History/History';
import Skills from './Skills/Skills';
import Contacts from './Contact/Contacts';
import Projects from './Projects/Projects';
import './profile.css'

function Profile(){
  return (
      <>
        <Header/>
        <Nav/>
        <Body/>
        <Projects/>
        <Skills/>
        <Contacts></Contacts>
      </>
    )
}
export default Profile;
