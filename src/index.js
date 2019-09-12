import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import * as serviceWorker from './serviceWorker';
import WebsiteRouter from "./router";
// import Global from "./components/globals";
// import {BrowserRouter as Router} from "react-router-dom"

ReactDOM.render((
    <WebsiteRouter/>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
