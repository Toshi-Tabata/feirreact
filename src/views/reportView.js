import React, {Component} from "react";
import MenuHeader from "../components/menuHeader";
import MenuFooter from "../components/menuFooter";
import ReportTable from "../components/reportTable";
import Hamburger from "../components/hamburger";
import Modal from "../components/modal";
import fileIcon from "../img/file.svg";
import SubmitButton from "../components/buttons/submitButton";
import "../style/reportView.css";

const perfSoln = require("../data/perfSoln");

export default class ReportView extends Component{

    getPerfSolnObject(){
        let bID = this.props.match.params.id; // gets bID from URL (.../report/<bID>)
        let b = perfSoln.performanceSolutions.filter((obj)=> obj.buildingIdentifier === bID); // returns perfsoln object
        if (b.length===0){
            return "Invalid ID"
        } else if (b[0].buildingIdentifier === bID) {
            return b[0];
        } else{
            return "Invalid ID"
        }
    }

    getBuildingName(){
        let ps = this.getPerfSolnObject();
        return ((ps === "Invalid ID") ? "Building ID Not Found" :  ps.buildingName);
    };

    getMitigationArray(){
        const ps = this.getPerfSolnObject();
        if (ps==="Invalid ID"){
            return
        }
        let mMarray = ps.mitigationMeasures; // array of mitigation measure objects
        return mMarray.reduce(function(result, obj){ // remove objects that contain missing KEYS for mM/obs/aA
            let tableRow = [obj.measure, obj.observation, obj.actionArising]; // missing value is fine
            if (!tableRow.includes(undefined)){
                result.push(tableRow)
            }
            return result
        }, []);
    }

    render() {
        return (
            <div id={"viewContainer"}>
                <MenuHeader title={this.getBuildingName()}>
                    <Hamburger>
                        <Modal
                            button={<img src={fileIcon} alt={"openModal"} id={"fileIcon"}/>}>

                        </Modal>

                    </Hamburger>
                </MenuHeader>
                <div id={"siteContent"}>
                <div>
                <table>
                    <ReportTable
                        tableHeading={["Mitigation Measures", "Observation", "Action Arising"]}
                        tableData={this.getMitigationArray()}
                    />
                </table>
                <SubmitButton/>
                </div>
                </div>
                <MenuFooter/>
            </div>
        )
    }
}