import React from 'react';
import NavSubContents from './Nav-contents';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Header(){
  const currentPath = window.location.pathname;
  let classN = ''

  if(currentPath === '/'){
    classN = "home-header";
  } else if(currentPath === '/profile'){
    classN = "profile_header";
  }else{
    classN = "projects_header";
  }

  const navLinks = [
    {title: "Home", url: "/" },
    {title: "Profiles", url: "/profile" },
    {title: "Projects", url: "/projects" },
    // {title: "Profiles", url: "/projects" }
  ]
  return (
    <header className={classN}>
      <div className="nav-contents">


        <h2 href='/'>Portforlio</h2>
        {navLinks.map(data => {
          return <NavSubContents key={data.id} title={data.title} url={data.url}/>
        })}
          <a href="/"><GitHubIcon/></a>
          <a href="/"><LinkedInIcon/></a>
        </div>
    </header>
  )
}

export default Header;
