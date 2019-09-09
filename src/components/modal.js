import React, {Component} from "react";
import "../style/modal.css"


export default class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
        this.handleOpen = this.handleOpen.bind(this);

        this.modalInstance = (
            <div onClick={this.handleOpen}>
                <div> {props.button} </div>
            </div>
        );

        this.handleClose = this.handleClose.bind(this);
        this.modalBackground = (
            <div id={"modalPage"} onClick={this.handleClose}> when you click the transparent area, close modal
                <div id={"modalContainer"}>
                    <span id={"closeBtn"} onClick={this.handleClose}>&times;</span>
                    <div id={"modalContent"}> {props.children} </div>

                </div>
            </div>
        )
    }

    handleOpen(){
        this.setState({showModal: true})
    }

    handleClose(evt){
        if(evt.target === evt.currentTarget){ // makes sure children don't trigger onClick event
            this.setState({showModal: false})
        }
    }

    render() {
        const modalStyle = this.state.showModal ?  {display: "block"}:{display: "none"};
        return(
            <div>
                {this.modalInstance}
                <div style={modalStyle}>{this.modalBackground}</div>
            </div>
        )
    }
}