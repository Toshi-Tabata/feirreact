import React from "react";
import "./menuFooter.css";

export default function MenuFooter(props){
    return(
        <footer>
            {props.children}
        </footer>
    )
}