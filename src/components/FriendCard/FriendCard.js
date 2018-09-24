import React from "react";
import "./FriendCard.css";
import Counter from "../Counter";

const FriendCard = props => (
  <div className="card">
    <div className="img-container" onClick={Counter.handleIncrement}>
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default FriendCard;
