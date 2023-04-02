import React from 'react';
import Card from './Card';

function SecBody(){
  return (
    <div>
      <div className="buttons">
        <button className="button1">GitHub</button>
        <button className="button2">Skills</button>
        <button className="button3">Contact</button>
      </div>
      <div>
        <Card/>
      </div>
    </div>
  )
}

export default SecBody;
