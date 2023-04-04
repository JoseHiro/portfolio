import React from 'react';
import SingleCard from './Card';

function CardList(props){
  const cardData1 = [
    {
      title: "Seekr",
      imgLink: "https://user-images.githubusercontent.com/108254240/223484099-da795e45-4ffd-4b6d-b1c3-9d1f4d1e3fb3.png",
      text: "App that allows you to find specific products on highstreets. You can add items that you want in your itinerary from the location that you have set. It shows that path in bicycle, car or walking by your preference. I was in charge to work with the Front-end using Ruby on rails, html, CSS for this project.",
      clickedStatus: props.status[0],
      url: "https://github.com/JoseHiro/Seekr",
      classN: 'card1',
      cardNumber: 0
    },
    {
      title: "Ventri",
      imgLink: "https://user-images.githubusercontent.com/108254240/223523764-db3db849-268c-4ce5-a095-472632b6c233.png",
      text: "App that you can find rental cars where you go. You can avoid using the extra time to go to a car rental office to fill in multiple papers. By this app we can find cars by the details that you want. For instance, color, brand, model, size, number of seats.... which can be suitable for different usage and occasion.It was group project with my classmates and I worked for both front and back end. I used Ruby on rails, HTML and CSS for this project.",
      clickedStatus: props.status[1],
      url: "https://github.com/JoseHiro/Ventri",
      classN: 'card2',
      cardNumber: 1
    },
    {
      title: "CaraLibro",
      imgLink: "https://user-images.githubusercontent.com/108254240/225777641-2e788330-daf2-4250-be52-8e952fe6b99e.png",
      text: "Ruby on rails, HTML and CSS I made this as a personal challenge to test my skills and to review things that I have studied.",
      clickedStatus: props.status[2],
      url: "https://github.com/JoseHiro/Caralibro",
      classN: 'card3',
      cardNumber: 2
    }
  ]

  const cardData2 = [
    {
      title: "Skills",
      imgLink: "https://d1tlzifd8jdoy4.cloudfront.net/wp-content/uploads/2019/07/github-eyecatch.png",
      text: "App that allows you to find specific products on highstreets. You can add items that you want in your itinerary from the location that you have set. It shows that path in bicycle, car or walking by your preference. I was in charge to work with the Front-end using Ruby on rails, html, CSS for this project.",
      clickedStatus: props.status[0],
      url: "https://github.com/JoseHiro",
      classN: 'card4',
      cardNumber: 3
    },
    {
      title: "RoadMap",
      imgLink: "https://assets-global.website-files.com/63062129119620a44791a2eb/63cae90abac8369bfc3fa72f_quarterly%20roadmap%20template.jpeg",
      text: "App that you can find rental cars where you go. You can avoid using the extra time to go to a car rental office to fill in multiple papers. By this app we can find cars by the details that you want. For instance, color, brand, model, size, number of seats.... which can be suitable for different usage and occasion.It was group project with my classmates and I worked for both front and back end. I used Ruby on rails, HTML and CSS for this project.",
      clickedStatus: props.status[1],
      url: "",
      classN: 'card5',
      cardNumber: 4
    },
    {
      title: "Links",
      imgLink: "https://resumegenius.com/wp-content/uploads/resume-soft-skills-hero-500x333.png",
      text: "Ruby on rails, HTML and CSS I made this as a personal challenge to test my skills and to review things that I have studied.",
      clickedStatus: props.status[2],
      url: "",
      classN: 'card6',
      cardNumber: 5
    }
  ]

  return (
    (props.cardList === 1)?
      cardData1.map(data => <SingleCard title={data.title}
      imgLink={data.imgLink}
      text={data.text}
      clickedStatus={data.clickedStatus}
      classN={data.classN}
      url={data.url}
      cardNum={data.cardNumber}
      setButtonStatus={props.setButtonStatus}
      />)
      :
      cardData2.map(data => <SingleCard title={data.title}
      imgLink={data.imgLink}
      text={data.text}
      clickedStatus={data.clickedStatus}
      classN={data.classN}
      url={data.url}
      cardNum={data.cardNumber}
      setButtonStatus={props.setButtonStatus}
      />)
  )
}


export default CardList;
