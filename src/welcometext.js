import React from 'react';
import './welcometext.css';
import arrow from "./arrow.png";

export default function WelcomeText() {
    return (
        <section>
            <img src={arrow} alt={"arrow-icon"}/>
            <div id="welcome-text">
                <div id="welcome-text-title">Welcome to the FEIR Editor</div>
                <div id="welcome-text-subtext">Open the side menu to get started!</div>
            </div>
        </section>
    );
}
