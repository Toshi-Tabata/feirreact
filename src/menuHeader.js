import React from "react";
import "./menuHeader.css"

export default function MenuHeader(props){
    return(
        <header>
            <h1>Fire Engineering Inspection Report Editor</h1>
            <div className="top">
               {props.children}
            </div>
        </header>
    )
}