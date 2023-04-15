import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './footer.css';

function Footer(){
  return (
    <section>
      <footer>
        <nav>
          <a href="#profile_container">Home</a>
          <a href="#history">Career</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <a href="https://github.com/JoseHiro" rel="noreferrer" target="_blank"><GitHubIcon/></a>
          <a href="https://www.linkedin.com/in/josey-sekine" rel="noreferrer" target="_blank"><LinkedInIcon/></a>
        </nav>
        <div>

        </div>
        <p>Copy Right©️</p>
      </footer>
    </section>
  )
}

export default Footer;
