import React from 'react';
import NavSubContents from './Nav-contents';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Header(){

  const navLinks = [
    {title: "Profiles", url: "#history" },
    {title: "Skills", url: "#skills" },
    {title: "Projects", url: "#projects" },
    {title: "Contacts", url: "#contact" },
  ]

  return (
    <header className="navbar">
      <nav className="nav_contents">
        <h2 href='/'>Portforlio</h2>
        {navLinks.map(data => {
          return <NavSubContents key={data.id} title={data.title} url={data.url}/>
        })}
        <a href="https://github.com/JoseHiro" rel="noreferrer" target="_blank"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/josey-sekine" rel="noreferrer" target="_blank"><LinkedInIcon/></a>
      </nav>
    </header>
  )
}

export default Header;
