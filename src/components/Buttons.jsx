import React from 'react';

function Buttons(props){
  function handleChangeClicked(event){
    props.setButtonStatus(event.target.id);
    event.preventDefault();
  }

  return <button id={props.btnId} onClick={handleChangeClicked} className={props.btnClass}>{props.btnName}</button>

}

export default Buttons;


//{/* <button id="1" onClick={handleChangeClicked} className="button2">Skills</button>
  //    <button id="2" onClick={handleChangeClicked} className="button3">Contact</button> */}
