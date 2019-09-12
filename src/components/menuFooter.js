import React from "react";
import "../style/menuFooter.css";

export default function MenuFooter(props){
    return(

        <footer>
            {props.children}
        </footer>

    )
}