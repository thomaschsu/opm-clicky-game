import React from "react";
import "./Title.css";

const Title = props => <nav className="title nav-wrapper blue">{props.children} <li id="topscore">Top Score: {props.topScore} <li id="score">Score: {props.score}</li> </li></nav>;

export default Title;
