import React from 'react'

export default function Counter(props) { 

    const [count,setCount]=React.useState(0);
    const [tags,setTags]=React.useState(['Tag1',"Tag2","Tag3"]);

    function inc(){
        setCount(count+1)
    }
    const classes=count===0?'CounterCount':'Counted';


    console.log(tags);


    return(
        <>
        <div className='CounterContainer'>
        <div className={classes}>{count===0?'zero':count}</div>
        <button className='CounterIncBtn' onClick={inc} type='button'>INC</button>
        <ul className='CounterTags'>
         
                {tags.map((tag)=>{
                    return <li key={tag}>{tag}</li>
                })}
           
        </ul>   
        </div>
        </>
    );
}