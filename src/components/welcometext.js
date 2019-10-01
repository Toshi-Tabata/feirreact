import React from 'react';
import '../style/welcometext.css';
import arrow from "../img/arrow.png";

export default function WelcomeText() {
    return (
        <section>
            <img id ="arrow-icon" src={arrow} alt={"arrow-icon"}/>
            <div id="welcome-text">
                <div id="welcome-text-title">Welcome to the FEIR Editor</div>
                <div id="welcome-text-subtext">Open the side menu to get started!</div>
            </div>
        </section>
    );
}
