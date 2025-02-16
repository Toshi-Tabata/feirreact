import React from "react";
import "../style/hamburger.css";
import hamburgerIcon from "../img/hamburger.png"

export default function Hamburger(props){
    return(
        <div>
            <nav role="navigation">
                <div id="toggleMenu">
                    {/*fake checkbox to check for onclick*/}
                    <input id="checkbox" type="checkbox" />

                    {/*make hamburger icon*/}
                    <img src={hamburgerIcon} id={"hamburgerIcon"} alt={"hamburgerIcon"}/>

                    <ul id="menuList">
                        <div id={"formatChildren"}>
                            {props.children}
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    )
}