import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function SingleCard(props){
  function handleClickAction(event){
    props.setButtonStatus(props.cardNum)
  }

  return (
    <Card onClick={handleClickAction} cardNum={props.cardNum} className={`single-card ${props.classN}`} style={{ width: '20rem', height: (!props.clickedStatus) && '255px' }}>
      <Card.Img style={{ height: '190px', objectFit: 'cover' }} variant="top" src={props.imgLink? props.imgLink : "https://imagenes.elpais.com/resizer/oYC3PxTQ8YwNGvhR09-RnFYq7BY=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/Q7SCZD53HZEF3ICW4HEPOAUNAM.jpg"}/>
      <Card.Body>
        <Card.Title>{props.title || "Title"}</Card.Title>
        {props.clickedStatus &&(<Card.Text>
           {props.text}
           <hr/>
           <Button href={props.url} variant="primary">Link</Button>
          </Card.Text>)}
      </Card.Body>
    </Card>
  )
}

export default SingleCard;
