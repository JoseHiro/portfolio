import React from 'react';
import Typed from 'react-typed';

function Buttons(){
  return (
  <article id="profile_description">
    <h1>
      <Typed strings={["&lt;h1&gt;Welcome&lt;/h1&gt;"]}
        typeSpeed={120}
        backSpeed={120}
        loop
      />
    </h1>
    <div className='name_favs'>
      <h3>const name = "Josey";</h3>
      <h4 ><pre>
        const likes =  &#123; <br/>
        skills: "Node.js React", <br/>
        sports: "Soccer",<br/>
        country: "Brazil Spain", <br/>
        foods: "Ramen Chocolate" <br/>
        &#125;
      </pre></h4>
    </div>
    <div className='neon_buttons'>
      <a href="/#contact">
        <button className="neon_button">Contact</button>
      </a>
      <a href="/#projects">
        <button className="neon_button">Projects</button>
      </a>
    </div>
    <div className="profile_description"></div>
    <div className="profile_description"></div>
  </article>
  )
}

export default Buttons;
