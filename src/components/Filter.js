import React from "react";

import MovieData from "./MovieData";
import { HoverRating } from "./RateComp";

function Filter({filterRate}) {
  //const handleChange=()=>{filterRate}
  const handle=()=>{
      console.log( 'the rate is ', HoverRating.value); 
    }
    return (
    <div>
      <HoverRating onClick={handle}/>
      
    </div>
  );
}

export default Filter;
