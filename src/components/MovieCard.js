import React from "react";
import { Card, Button } from "react-bootstrap";
//import Rating from "./rating";
//import Rate from "./Rate";
import { HalfRating } from "./RateComp";
//function MovieCard({ title, affcihe,description,rate}) {
    function MovieCard({ movie}) {
 const { title, affiche, rate,description}= movie;

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={affiche} />
        <Card.Body>
          <Card.Title>Card {title}</Card.Title>
          <Card.Text>
            {description}
             <HalfRating value={rate}></HalfRating>
          </Card.Text>
          
          <Button variant="primary">Movie Trailer</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieCard;
