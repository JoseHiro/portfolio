import React from 'react';

function Buttons(){
  return (
  <div id="profile-decription">
    <h1>Welcome to my page</h1>
    <h4><pre>
      <h3>&lt;h4&gt;hello&lt;/h4&gt;</h3>
      <h3>&lt;h4&gt;My name is Josey&lt;/h4&gt;</h3>
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
      <button className="neon-button">Skills</button>
    </div>
    <div className="profile-description"></div>
    <div className="profile-description"></div>
  </div>
  )
}

export default Buttons;
