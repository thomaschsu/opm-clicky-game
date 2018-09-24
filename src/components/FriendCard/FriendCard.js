import React from "react";
import "./FriendCard.css";
import Counter from "../Counter";

const FriendCard = props => (
  <div className="card" onClick={Counter.handleIncrement}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default FriendCard;
