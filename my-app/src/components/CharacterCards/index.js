import React from "react";
import './style.css';


function CharCard(props) {
    return (
        <div id="card" className="card" onClick={() => props.clicked(props.id)}>
            <img height="300px" width="100%" alt={props.name} src={props.image} value={props.selected}/>
        </div>
    )
}



export default CharCard;