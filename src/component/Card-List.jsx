import React from "react";
import "./Card-List.css";
import Card from "./Card";
const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card monster={monster} key={monster.id} />
      ))}
    </div>
  );
};

export default CardList;
