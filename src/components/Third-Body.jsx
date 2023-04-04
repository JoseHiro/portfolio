import React, {useState} from 'react';
// import SingleCard from './Card';
import Buttons from './Buttons';
import CardList from './Card-List';

function ThirdBody(){
  const [clickedStatus, setbuttons] = useState([false, false, false]);

  function setClickStatus(event){
    let newStatus = [false, false, false];
    newStatus[event - 3] = true;
    setbuttons(newStatus);
  }
  const buttonsData =
  [
    {
      id: 3,
      className: "button4",
      btnName: "Skills"
    },
    {
      id: 4,
      className: "button5",
      btnName: "Road"
    },
    {
      id: 5,
      className: "button6",
      btnName: "Third"
    }
  ]

  return (
    <div>
      <div className="buttons">
      <h1 className="contents-name">Skills</h1>
        {buttonsData.map((data) => <Buttons setButtonStatus={setClickStatus} btnId={data.id} btnClass={data.className} btnName={data.btnName}/>)}
      </div>
      <div>
        <CardList cardList={2} status={clickedStatus}/>
      </div>
    </div>
  )
}


export default ThirdBody;
