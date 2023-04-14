import React from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai'
import {CgGym} from 'react-icons/cg'
import {AiOutlineMessage} from 'react-icons/ai'
import {BsPersonWorkspace} from 'react-icons/bs'


function Nav(){
  return (
    <nav id="small_screen_nav">
      <a className="active" href="#"><AiOutlineHome/></a>
      <a href="#history"><AiOutlineUser/></a>
      <a href="#skills"><CgGym/></a>
      <a href="#projects"><BsPersonWorkspace/></a>
      <a href="#contact"><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav;
