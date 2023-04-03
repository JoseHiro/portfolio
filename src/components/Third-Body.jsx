import React from 'react';
import SingleCard from './Card';
import Buttons from './Buttons';

function ThirdBody(){
  return (
    <div>
      <h1>Skills</h1>
      <Buttons/>
      <div id="card-list">
        <SingleCard></SingleCard>
        <SingleCard></SingleCard>
        <SingleCard></SingleCard>
      </div>
    </div>
  )
}


export default ThirdBody;
