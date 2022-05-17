import React from "react";
import '../../styles/style.css';


export default function Contact(props){
    return(
        <div className="container">
            <div className="contact-card">
                    <img src={props.img} alt="..."></img>
                    <h3>{props.name}</h3>
                    <div className="info-group">
                    <img src="" alt="..."></img>
                    <p>{props.phone}</p>
                    </div>
                    <div className="info-group">
                    <img src="" alt="..."></img>
                    <p>{props.email}</p>
                    </div>
            </div>
        </div>
  )
};