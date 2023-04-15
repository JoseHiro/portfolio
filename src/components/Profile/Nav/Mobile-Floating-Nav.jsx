import React, {useState}from 'react';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai'
import {CgGym} from 'react-icons/cg'
import {AiOutlineMessage} from 'react-icons/ai'
import {BsPersonWorkspace} from 'react-icons/bs'
import './nav.css';


function FloatingNav(){
  const [activeNav, setActiveNav] = useState('#profile_container');

  return (
    <nav id="small_screen_nav">
      <a href="#profile_container" onClick={()=> setActiveNav('#history')} lassName={activeNav === '#profile_container' ? 'active' : ''} ><AiOutlineHome/></a>
      <a href="#history" onClick={()=> setActiveNav('#history')} className={(activeNav === '#history')? 'active': ''}><AiOutlineUser/></a>
      <a href="#projects" onClick={()=> setActiveNav('#projects')}  className={activeNav === '#projects'? 'active': ''} ><BsPersonWorkspace/></a>
      <a href="#skills" onClick={()=> setActiveNav('#skills')}  className={activeNav === '#skills'? 'active': ''} ><CgGym/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')}  className={activeNav === '#contact'? 'active': ''} ><AiOutlineMessage/></a>
    </nav>
  )
}

export default FloatingNav;
