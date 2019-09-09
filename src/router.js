import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Login from "./views/login"
import NotFound from "./views/notFound";

export default class WebsiteRouter extends Component{
    render(){
        return(
            <Router>
                <Switch>
                <Route exact path={"/"} component={Login}/>
                <Route exact path={"/404"} component={NotFound}/>
                <Redirect to={"/404"}/>
                </Switch>
            </Router>
        )
    }
}