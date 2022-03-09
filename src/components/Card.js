import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

export default function Card(props){
    console.log(props.item)
    return(
        <div className="card container">
            <div className="row">
                <div className="col">
                    <img src={props.item.coverImg} className="card-img"/>
                </div>
            <div className="col"> 
                <div className="card-enviornment">
                    <div className="locationStamp">
                    <i><FontAwesomeIcon icon={faLocationDot} /></i>
                    <p className="loca">{props.item.enviornment.location}</p>
                    </div>
                    <div class="space">
                    <a href={props.item.enviornment.maps} className="mapping">View on Google maps</a> 
                    </div> 
                    </div>
                    <h1 className="bold">{props.item.enviornment.title}</h1>
                <p className="boldDate">{props.item.date}</p>
                <p className="info">{props.item.description}</p>
            </div> 
            </div>
        </div>
        
    )
}