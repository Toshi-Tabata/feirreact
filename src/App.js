import React from 'react';
import './App.css';
import "./welcometext"
import WelcomeText from "./welcometext";
import MenuHeader from "./menuHeader";
import Hamburger from "./hamburger";

function App() {
  return (
      <div>
        <MenuHeader children={
          <Hamburger children={
            <div>hello</div>}/>}/>
          <div> hi world </div>
          <WelcomeText/>
      </div>
);
}

export default App;
