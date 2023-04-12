import React from 'react';

function LongButton(props){
  function handleButtonEnter(event){
    props.mouseEnter(parseInt(event.target.id));
  }
  return <button id={props.id} className={props.classN} onMouseEnter={handleButtonEnter}></button>
}

export default LongButton;
