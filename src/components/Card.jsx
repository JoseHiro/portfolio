import React from 'react';
import Card from 'react-bootstrap/Card';

function SingleCard(props){
  return (
    <Card className="single-card" style={{ width: '20rem' }}>
      <Card.Img style={{ height: '190px', objectFit: 'cover' }} variant="top" src={props.imgLink? props.imgLink : "https://imagenes.elpais.com/resizer/oYC3PxTQ8YwNGvhR09-RnFYq7BY=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/Q7SCZD53HZEF3ICW4HEPOAUNAM.jpg"}/>
      <Card.Body>
        <Card.Title>{props.title || "Title"}</Card.Title>
        {/* { if(buttonClicked) <Card.Text>
           {props.text || "No text"}
          </Card.Text>
        } */}
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  )
}

export default SingleCard;
