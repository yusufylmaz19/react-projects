import React from "react"
import PropTypes from 'prop-types';
export default function Button({title,color,onAdd,showAdd}){

    return(
        <>
        <button className="taskAddButton" type="button" onClick={onAdd}  style={{background:color}}>{showAdd?'Close':title}
        </button>    
        </>
    )
}

Button.defaultProps = {
    color:'green',
}

Button.propTypes = {
    title:PropTypes.string.isRequired,
    color:PropTypes.string.isRequired,
}
