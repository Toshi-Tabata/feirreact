import React, {Component} from "react";
import {withRouter} from "react-router-dom"
import WebsiteRouter from "../router";



function setParams({query=""}){
    const searchParams = new URLSearchParams();
    searchParams.set("query", query);
    return searchParams.toString();
}


class Global extends Component{ // update URL based on state of app

    state = {inputValue: ""};
    updateInputValue = e => this.setState({inputValue: e.target.value});

    updateURL = () => {
        const url = setParams({query: this.state.inputValue});
        this.props.history.push(`?${url}`);
    };




    render() {
        return (
            <div>
                <input
                    type={"text"}
                    className={"input"}
                    placeholder={"what am I looking for"}
                    value={this.state.inputValue}
                    onChange={this.updateInputValue}
                />
                <input
                    type={"button"}
                    value={"Change URL"}
                    onClick={this.updateURL}
                />
            </div>
        )
    }
}
export default withRouter(props => <Global {...props} />);