import React from 'react';
import image from '../../img/retro_bg_17.png'
import image2 from '../../img/7sn5o1woonmklx1h.png'
import image3 from '../../img/tokyo-view.jpg'
import Carousel from 'react-bootstrap/Carousel';


function TopBody(){
  return (
    <Carousel interval={null}>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={image}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}


export default TopBody
