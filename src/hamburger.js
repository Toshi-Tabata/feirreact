import React from "react";
import "./hamburger.css";

//TODO: make <span></span> a real icon instead of lots of spans
export default function Hamburger(props){
    return(
        <div>
            <nav role="navigation">
                <div id="menuToggle">
                    {/*fake checkbox to check for onclick*/}
                    <input type="checkbox" />

                    {/*make hamburger icon*/}
                    <span></span>
                    <span></span>
                    <span></span>

                    <ul id="menu">
                        {props.children}
                        <a href="#"><li>Home</li></a>
                        <a href="#"><li>About</li></a>
                        <a href="#"><li>Info</li></a>
                        <a href="#"><li>Contact</li></a>
                    </ul>
                </div>
            </nav>
        </div>
    )
}