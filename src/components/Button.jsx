import React, { Component } from 'react'
import './Button.css'

export default props => {
    
    // defines css class depending on operation attr
    let classes = 'button ';
    classes += props.operation ? 'operation' : '';
    classes += props.operation ? 'double' : '';
    classes += props.operation ? 'triple' : '' 

    return (
        <button className={classes}>
            {props.label}
        </button>
   )
}