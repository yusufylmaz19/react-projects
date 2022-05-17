import React from 'react';

export default function Jokes(props){

        return(
            <>
                <div>{props.soru}</div>
                <br></br>
                <div>{props.cevap}</div>
            </>
        );

};