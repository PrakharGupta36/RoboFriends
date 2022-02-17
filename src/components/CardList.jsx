import React from "react";
import Card from "./Card";

function CardList(props) {
  return (
    <div className='container'>
      {props.robots.map((i, index) => {
        const { name, id, email } = i;
        return <Card key={index} email={email} id={id} name={name} />;
      })}
    </div>
  );
}

export default CardList;
