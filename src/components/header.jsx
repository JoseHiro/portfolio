import React from 'react';
import NavSubContents from './Nav-contents';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Header(){
  return (
    <header>
      <div className="nav-contents">
        <h2>Portforlio</h2>
          <NavSubContents title={"Link"}/>
          <NavSubContents title={"Skills"}/>
          <NavSubContents title={"Contact"}/>
          <p><GitHubIcon/></p>
          <p><LinkedInIcon/></p>
        </div>
    </header>
  )
}

export default Header;
