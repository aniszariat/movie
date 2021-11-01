import "./App.css";
import MovieCard from "./components/MovieCard";
//import { SelectRating, HoverRating } from "./components/RateComp";
import React, { useEffect, useState } from "react";
import MovieData from "./components/MovieData";
import Filter from "./components/Filter";
import MList from "./components/MList";
import { Col, Container, Row } from "react-bootstrap";
function App() {
   const [movielist, setMovielist] = useState([]);
   const [movielistF, setMovielistF] = useState([]);
  
  useEffect(() => {
    
    setTimeout(() => {
      setMovielist(MovieData);
      setMovielistF(MovieData);
    }, 2000);
  });
  
  

  return (
    <Container>
      
      <Row>
        <Filter/>
      </Row>
      <Row>
        <Col>
        <MList list={movielistF}/>
        </Col>
      </Row>
    </Container>
      
      
  );
}

export default App;

