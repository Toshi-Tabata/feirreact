import React from 'react';
import './App.css';
import "./welcometext"
import WelcomeText from "./welcometext";
import MenuHeader from "./menuHeader";
import Hamburger from "./hamburger";
import MenuFooter from "./menuFooter.js"
import Modal from "./modal"

function App() {
  return (
      <div>
          <MenuHeader title={"Fire Engineering Inspection Report Editor"}>
              <Hamburger>
                   <div>hello</div>
                  <Modal/>

              </Hamburger>
          </MenuHeader>
        <WelcomeText/>
        <MenuFooter/>
      </div>
  );
}

export default App;
