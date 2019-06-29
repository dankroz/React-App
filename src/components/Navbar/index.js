import React from "react";
import "./navbar.css";

function NavBar(props) {
    return (
        <>
            <ul className="nav nav-bar">
                <li id="title" className="nav-item">Memory Game</li>
                <li id="clickPic" className="nav-item">Click a Character to Begin!</li>
                <li id="score" className="nav-item">Score: {props.score}</li>
                <li id="highScore" className="nav-item">High Score: {props.highscore} </li>
            </ul>
        </>
    )
}

export default NavBar;