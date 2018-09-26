import React from "react";
import "./Nav.css";

const Nav = props => <nav>
    <div className="nav-wrapper blue">
    <a href="/" class="brand-logo">{props.title}</a>
    <ul id="nav-mobile" class="right">
        <li>Top Score: {props.topScore}</li>
        <li>Score: {props.score}</li>
    </ul>
    </div>
    </nav>;

export default Nav;
