import React from "react";
import "./hamburger.css";
import hamburgerIcon from "./hamburger.png"

export default function Hamburger(props){
    return(
        <div>
            <nav role="navigation">
                <div id="toggleMenu">
                    {/*fake checkbox to check for onclick*/}
                    <input type="checkbox" />

                    {/*make hamburger icon*/}
                    <img src={hamburgerIcon} id={"hamburgerIcon"} alt={"hamburgerIcon"}/>

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