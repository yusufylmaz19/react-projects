import React from 'react';
import Jokes from './jokes';
import JokeData from './jokesData';

export default function App2(){
    
    
    const jokeComponents = JokeData.map(joke => <Jokes soru={joke.soru} cevap={joke.cevap} />);

    return(
          <div>
              {jokeComponents}
          </div>
    );
} 