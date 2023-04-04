import React, {useState} from 'react';
import CardList from './Card-List';
import Buttons from './Buttons';

function SecBody(){
  const [clickedStatus, setbuttons] = useState([false, false, false]);

  const buttonsData = [
    { id: 0, className: "button1", btnName: "GitHub" },
    { id: 1, className: "button2", btnName: "Skills"},
    { id: 2, className: "button3", btnName: "Contact"}]

  function setClickStatus(event){
    let result = [false, false, false];
    result[parseInt(event)] = true;
    setbuttons(result);
  }

  return (
    <div>
      <h1>Works</h1>
      <div className="buttons">
        {buttonsData.map((data) => <Buttons
          setButtonStatus={setClickStatus}
          btnId={data.id}
          btnClass={data.className}
          btnName={data.btnName}/>
        )}
      </div>
      <div>
        <CardList cardList={1} status={clickedStatus}/>
      </div>
    </div>
  )
}

export default SecBody;
