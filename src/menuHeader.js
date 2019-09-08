import React from "react";
import "./menuHeader.css"

export default function MenuHeader(props){
    return(
        <header>
            <h1>{props.title}</h1>
            <div className="top">
               {props.children}
            </div>
        </header>
    )
}