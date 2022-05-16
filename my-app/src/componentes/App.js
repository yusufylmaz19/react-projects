import React from 'react';
import Contact from "./Contact";

import '../styles/app.css'

export default function App() {
  return (
    <div className='contianer-app'>
        <Contact
            img="https://randomuser.me/api/portraits/men/5.jpg"
            phone="111-11-1111"
            name="Mr.Meeseekss"
            email="Meeseekss@gmail.com"
        />
        <Contact
            img="https://randomuser.me/api/portraits/men/36.jpg"
            phone="222-22-2222"
            name="Mr. Brown"
            email="Brown@gmail.com"
        
        />
        <Contact
            img="https://randomuser.me/api/portraits/men/15.jpg"
            phone="333-33-3333"
            name="Mr.something"
            email="something@gmail.com"

        />
        <Contact
            img="https://randomuser.me/api/portraits/men/42.jpg"
            phone="444-44-4444"
            name="Mr.reese"
            email="reese@gmail.com"


        />
    </div>
    );
}
