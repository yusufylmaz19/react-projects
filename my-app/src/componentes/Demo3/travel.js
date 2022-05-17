import React from 'react';
import {ImLocation} from 'react-icons/im';
import '../../styles/travel.css';
export default function Travel(props) {
    return (
      <>
        <main className='travelContainer'>
            <img className='travelImg' src={props.image}></img> 
            <div className='travelTexts'>
                <div className='travelLocation'>
                    <ImLocation className='travelLocIcon'/>
                    <p className='travelCountry'>{props.country}</p>
                    <a className='travelLink' target='_blank' href={props.link}>View on Google Maps</a>
                </div>
                <h1 className='travelNameOfPlace'>{props.place}</h1>
                <p className='travelDate'>props.date</p>
                <article className='travelDescription'>
                {props.description}
                </article>
            </div>
        </main>

      </>
    )
}