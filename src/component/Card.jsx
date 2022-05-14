import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
        alt="mosnter"
      />
      <h1>{props.monster.name}</h1>
      <h4>{props.monster.email}</h4>
    </div>
  );
};
export default Card;
