import React from 'react';

function Buttons(props){

  function handleChangeClicked(event){
    event.preventDefault();
    props.setClickStatus(event);
  }

  return(
    <div className="buttons">
      <button onClick={handleChangeClicked} className="button1">GitHub</button>
      <button onClick={handleChangeClicked} className="button2">Skills</button>
      <button onClick={handleChangeClicked} className="button3">Contact</button>
    </div>
  )
}

export default Buttons;
