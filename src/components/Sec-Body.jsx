import React, {useState} from 'react';
import CardList from './Card-List';
import Buttons from './Buttons';

function SecBody(){
  const [clickedStatus, setbuttons] = useState([false, false, false]);

  const buttonsData = [
    { id: 0, className: "button1", btnName: "GitHub"},
    { id: 1, className: "button2", btnName: "Skills"},
    { id: 2, className: "button3", btnName: "Contact"}]

  function setClickStatus(event){
    console.log('hello')
    if(clickedStatus[parseInt(event)] === true){
      setbuttons([false, false, false]);
    }else{
      let result = [false, false, false];
      result[parseInt(event)] = true;
      setbuttons(result);
    }
  }

  return (
    <container id="sec-body-container">
      <div className="buttons">
        <h1>Works</h1>
        {buttonsData.map((data) => <Buttons
          setButtonStatus={setClickStatus}
          btnId={data.id}
          btnClass={data.className}
          btnName={data.btnName}
          />
        )}
      </div>
        <div id="card-list">
          <CardList cardList={1} status={clickedStatus} setButtonStatus={setClickStatus}/>
        </div>

    </container>
  )
}

export default SecBody;
