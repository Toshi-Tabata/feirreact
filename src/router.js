import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Login from "./views/login"
import NotFound from "./views/notFound";
import ReportView from "./views/reportView"
import Global from "./components/globals";

export default class WebsiteRouter extends Component{
    render(){
        return(
            <Router>
                <Switch>
                <Route exact path={"/"} component={Login}/>
                <Route exact path={"/report/:id"} component={ReportView}/>
                <Route exact path={"/report"} component={ReportView}/>
                <Route exact path={"/404"} component={NotFound}/>
                <Route path={"/"} component={Global}/>
                <Redirect to={"/404"}/>
                </Switch>
            </Router>
        )
    }
}