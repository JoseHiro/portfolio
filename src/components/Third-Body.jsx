import React from 'react';
import SingleCard from './Card';
import Buttons from './Buttons';
// import CardList from './Card-List';

function ThirdBody(){

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
      <h1>Skills</h1>
      <div className="buttons">
        {buttonsData.map((data) => <Buttons btnId={data.id} btnClass={data.className} btnName={data.btnName}/>)}
      </div>
       {/* <CardList/> */}
      <div id="card-list">
        <SingleCard></SingleCard>
        <SingleCard></SingleCard>
        <SingleCard></SingleCard>
      </div>
    </div>
  )
}


export default ThirdBody;
