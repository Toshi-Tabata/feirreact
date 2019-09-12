import React from "react";
import "../../style/submitButton.css";

export default function SubmitButton(props){
    return(
        <button id={"submitBtn"}>{props.children}</button>
    )
}