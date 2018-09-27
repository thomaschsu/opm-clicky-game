import React from "react";
import "./Nav.css";

const Nav = props => <nav>
    <div className="nav-wrapper blue">
    <a href="/" className="brand-logo">{props.title}</a>
    <ul id="nav-mobile" className="right">
        <li className="nav-score">Score: {props.score}</li>
    </ul>
    </div>
    </nav>;

export default Nav;
