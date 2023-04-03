import React from 'react';
import SingleCard from './Card';
// import Card from 'react-bootstrap/Card';

function CardList(){
  return (
    <div id="card-list">
      <SingleCard
        title={"CaraLibro"}
        imgLink={"https://user-images.githubusercontent.com/108254240/223484099-da795e45-4ffd-4b6d-b1c3-9d1f4d1e3fb3.png"}
        text={"App that allows you to find specific products on highstreets. You can add items that you want in your itinerary from the location that you have set. It shows that path in bicycle, car or walking by your preference. I was in charge to work with the Front-end using Ruby on rails, html, CSS for this project."}
        >
      </SingleCard>
      <SingleCard
        title={"Ventri"}
        imgLink={"https://user-images.githubusercontent.com/108254240/223523764-db3db849-268c-4ce5-a095-472632b6c233.png"}
        text={"App that you can find rental cars where you go. You can avoid using the extra time to go to a car rental office to fill in multiple papers. By this app we can find cars by the details that you want. For instance, color, brand, model, size, number of seats.... which can be suitable for different usage and occasion.It was group project with my classmates and I worked for both front and back end. I used Ruby on rails, HTML and CSS for this project."}
        >
      </SingleCard>
      <SingleCard
        title={"Caralibro"}
        imgLink={"https://user-images.githubusercontent.com/108254240/225777641-2e788330-daf2-4250-be52-8e952fe6b99e.png"}
        text={"Ruby on rails, HTML and CSS I made this as a personal challenge to test my skills and to review things that I have studied."}
        >
      </SingleCard>
    </div>
  )
}


export default CardList;
