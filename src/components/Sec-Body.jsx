import React, {useState} from 'react';
import CardList from './Card-List';
import Buttons from './Buttons';

function SecBody(){
  const [clickedStatus, setClick] = useState([false, false, false])
  console.log(clickedStatus);

  function setClickStatus(){
    console.log('hello');
  }
  return (
    <div>
      <h1>Works</h1>
      <Buttons clickedStatus={clickedStatus} setClickStatus={setClickStatus}/>
      <div>
        <CardList/>
      </div>
    </div>
  )
}

export default SecBody;
