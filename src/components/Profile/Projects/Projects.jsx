import React from 'react';
import './projects.css';

function Projects(){
  return <section id="projects">
      <h5 className="title">Recent works</h5>
      <h5 className="message" >Projects</h5>
    <div className='container portfolio__container'>
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img alt="" src="https://user-images.githubusercontent.com/108254240/223484099-da795e45-4ffd-4b6d-b1c3-9d1f4d1e3fb3.png"/>
        </div>
        <h3>Seekr</h3>
        <div className='portfolio__item-cta'>
          <a href="http://github.com" className='neon_button'>GitHub</a>
        </div>
      </article>
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img alt="" src="https://user-images.githubusercontent.com/108254240/223523764-db3db849-268c-4ce5-a095-472632b6c233.png"></img>
        </div>
        <h3>Ventri</h3>
        <div className='portfolio__item-cta'>
          <a href="http://github.com" className='neon_button'>GitHub</a>
        </div>
      </article>
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img alt="" src="https://user-images.githubusercontent.com/108254240/225777641-2e788330-daf2-4250-be52-8e952fe6b99e.png"></img>
        </div>
        <h3>Caralibro</h3>
        <div className='portfolio__item-cta'>
          <a href="http://github.com" className='neon_button'>GitHub</a>
        </div>
      </article>
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img alt="" src="https://user-images.githubusercontent.com/108254240/225114886-4b83dafb-b5e7-4f98-9708-5d506b92bb96.png"></img>
        </div>
        <h3>Message node</h3>
        <div className='portfolio__item-cta'>
          <a href="http://github.com" className='neon_button'>GitHub</a>
        </div>
      </article>
    </div>
  </section>
}

export default Projects;
