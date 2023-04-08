import React, {useState} from 'react';
// import SingleCard from './Card';
import Buttons from './Buttons';
import CardList from './Card-list';

function ThirdBody(){
  const [clickedStatus, setbuttons] = useState([false, false, false]);

 function setClickStatus(event){
    if(clickedStatus[parseInt(event) - 3] === true){
      setbuttons([false, false, false]);
    }else{
      let result = [false, false, false];
      result[parseInt(event) - 3] = true;
      setbuttons(result);
    }
  }

  const buttonsData =
  [ {id: 3, className: "button4", btnName: "Skills"},
    {id: 4, className: "button5", btnName: "Road"},
    {id: 5, className: "button6", btnName: "Third"}]

  return (
    <container id="third-body-container">
      <div className="buttons">
      <h1>Skills</h1>
        {buttonsData.map((data) => <Buttons
        setButtonStatus={setClickStatus}
        btnId={data.id}
        btnClass={data.className}
        btnName={data.btnName}/>
        )}
      </div>
      <div id="card-list">
        <CardList cardList={2} status={clickedStatus} setButtonStatus={setClickStatus}/>
      </div>
    </container>
  )
}


export default ThirdBody;
