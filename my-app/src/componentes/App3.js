import React from 'react';
import Navbar from './travelNavbar';
import Travel from './travel';
import TravelData from './travelData';


export default function App3(){
    
    const TravelComponent = TravelData.map((e)=>{
        return(
            <Travel 
                image={e.image}
                country={e.country}
                link={e.link}
                place={e.place}
                date={e.date}
                description={e.description}
            />
        )
    })
    
    return(
        <div>
                <Navbar/>
                {TravelComponent} 
        </div>
    )
}