import React, {Component} from "react";
import "./modal.css"
import fileIcon from "./file.svg"


// TODO: add event listeners or onclick events for elements
// https://codesandbox.io/s/84ol32ono9?from-embed
export default class Modal extends Component{
    modalFn() {
        const modalBtn = document.getElementById("openModal");
        const modal = document.getElementById("modal");
        const closeModal = document.getElementById("closeModal");


        modalBtn.addEventListener("click", function () {
            modal.style.display = "block";
        });

        closeModal.addEventListener("click", function () {
            modal.style.display = "none";
        });

        window.onclick = function (e) {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        };
    }
    render() {
        return (<div id="modal" className="modal">
                <img src={fileIcon} id="openModal" title="Open report"/>
                <div className="modal-content">
                    <span id={"closeModal"}>&times;</span>
                    <div className="form-popup" id="building_id_form">
                        <div className="modal-box-content">


                        </div>
                    </div>
                </div>

            </div>

        )
    }
}