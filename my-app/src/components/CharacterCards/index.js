import React from "react";
import './style.css';


function CharCard(props) {
    return (
        <div id="card" className="card" onClick={() => props.clicked(props.id)}>
            <div className="img-container">
                <img alt={props.name} src={props.image} value={props.selected}/>
            </div>
        </div>
    )
}



export default CharCard;