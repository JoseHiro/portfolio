import React from 'react';
import Typed from 'react-typed';

function Buttons(){
  return (
  <article id="profile_decription">
    <h1>
      <Typed strings={["&lt;h1&gt;Welcome&lt;/h1&gt;"]}
        typeSpeed={120}
        backSpeed={120}
        loop
      />
    </h1>
    <div className='name_favs'>
      {/* <h3>&lt;h4&gt;const name = "Josey"; &lt;/h4&gt;</h3> */}
      <h3>const name = "Josey";</h3>
      <h4 ><pre>
        const favs =  &#123; <br/>
        skiils: "Node.js React", <br/>
        sports: "Soccer",<br/>
        country: "Brazil Spain", <br/>
        food: "Ramen Chocolate" <br/>
        &#125;
      </pre></h4>
    </div>
    <div>
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
