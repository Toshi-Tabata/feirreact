import React, {Component} from "react";
import "../style/testComponent.css";

export default class TestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDiv: false
        };
        this.handleChange = this.handleChange.bind(this);

        this.divInstance = (
            <div onClick={this.handleChange}>
                <div> this is a test component click me! </div>
            </div>
        )
    }

    handleChange(){
        this.setState({showDiv: true});
    }

    render(){
        const style = this.state.showDiv ? {display: "none"} : {};
        return(
            <div style={style}>
                {this.divInstance}
            </div>
        )
    }



}