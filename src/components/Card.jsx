import React from "react";

function Card(props) {
  return (
    <div className='card'>
      <img
        className='cardImg'
        src={`https://robohash.org/${props.id}`}
        alt=''
      />
      <div className='cardInfo'>
        <h2>{props.name}</h2>
        <p> {props.email} </p>
      </div>
    </div>
  );
}

export default Card;
