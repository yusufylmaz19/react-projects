import React from 'react';
import '../styles/travel.css';
import { BiWorld } from 'react-icons/bi';
export default function Travel() {
    return (
      <>
       <nav className='travelNav'>
           <div className='navContainer'>
           <BiWorld className='travelIcon'/>
           <p>my travel journal.</p>
           </div>
        </nav>
      </>
    )
}