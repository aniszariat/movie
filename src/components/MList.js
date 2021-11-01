import React from "react";
import {Row,Col} from "react-bootstrap";
import MovieCard from "./MovieCard"
function MList({list}) {
  return (
    
      
  <Row>
    {list.map((value, index) => (
        <Col lg="3" md="4" sm="6" key={index}>
          <MovieCard movie={value} />
        </Col>
      ))}
  </Row>  
  );
}

export default MList;

