import React from 'react';
import Typed from 'react-typed';

function Buttons(){
  return (
  <div id="profile-decription">
    <h1>
      <Typed strings={["&lt;h1&gt;Welcome&lt;/h1&gt;"]}
        typeSpeed={80}
        backSpeed={80}
        loop
      />
    </h1>
    <h4><pre>
      {/* <Typed strings={["&lt;h4&gt;const name= Josey; &lt;/h4&gt;"]}
        typeSpeed={90}
      /> */}
      <h3>&lt;h4&gt;const name = "Josey"; &lt;/h4&gt;</h3>
      <pre>
        const favs =  &#123; <br/>
        skiils: "Node.js React", <br/>
        sports: "Soccer",<br/>
        country: "Brazil Spain", <br/>
        food: "Ramen Chocolate" <br/>
        &#125;
      </pre>
    </pre></h4>
    <div>
      <button className="neon-button">Contact</button>
      <button className="neon-button">Projects</button>
    </div>
    <div className="profile-description"></div>
    <div className="profile-description"></div>
  </div>
  )
}

export default Buttons;
