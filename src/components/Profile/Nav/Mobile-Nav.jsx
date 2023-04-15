import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function MobileNav(){
  return (
    <header className="navbar">
      <nav className="nav_contents">
        <h1 href='/'>Portforlio</h1>
        <a className="nav_icon" href="https://github.com/JoseHiro" rel="noreferrer" target="_blank"><GitHubIcon/></a>
        <a className="nav_icon" href="https://www.linkedin.com/in/josey-sekine" rel="noreferrer" target="_blank"><LinkedInIcon/></a>
      </nav>
    </header>
  )
}

export default MobileNav;
