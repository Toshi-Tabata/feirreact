import React from "react";
// import {Link} from "react-router-dom";
import '../style/login.css';
import WelcomeText from "../components/welcometext";
import MenuHeader from "../components/menuHeader";
import Hamburger from "../components/hamburger";
import MenuFooter from "../components/menuFooter.js"
import Modal from "../components/modal"
import TestComponent from "../components/testComponent";
import fileIcon from "../img/file.svg"

export default function Login() {
  return (
      <div>
          <MenuHeader title={"Fire Engineering Inspection Report Editor"}>

              <Hamburger>
                  <Modal button={<img src={fileIcon} alt={"openModal"} id={"fileIcon"}/>}>
                      <div>Enter building identifier:</div>
                      <textarea placeholder={"e.g. UNSW01"}/>
                      <button>Submit</button>
                  </Modal>

              </Hamburger>
          </MenuHeader>
        <WelcomeText/>
        <MenuFooter/>
        <TestComponent/>
      </div>
  );
}