import React from 'react';
import Header from './Header/Header';
import Nav from './Nav/Mobile-Floating-Nav';
import Body from './History/History';
import Skills from './Skills/Skills';
import Contacts from './Contact/Contacts';
import Projects from './Projects/Projects';

function Profile(props){

  return (
      <>
        <Header/>
        {(props.screenSize)&& <Nav/>}
        <Body/>
        <Projects/>
        <Skills/>
        <Contacts></Contacts>
      </>
    )
}
export default Profile;
