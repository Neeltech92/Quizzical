import React, {useState} from "react"

export default function CheckButton(props) {
    
    return (
        <button onClick={props.toggleShow}>Check answers</button>
    )
}