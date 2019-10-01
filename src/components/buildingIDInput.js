import React, {Component} from "react";
import Select from "react-select";
import "../style/buildingInput.css"
import {Link} from "react-router-dom"
import SubmitButton from "./buttons/submitButton"
const perfSoln = require("../data/perfSoln");




const buildingID = perfSoln.performanceSolutions
    .filter(object => "buildingIdentifier" in object) // remove objects without a building ID
    .map(({buildingIdentifier}) => {
        return(
            {value: buildingIdentifier,
                label: buildingIdentifier}
        )
    });  // create array of objects with each building ID as labels and values

const styles = { // when box is reselected, previous text is greyed out. Better user experience
    position: "relative",
    singleValue: (base, state) => ({
        ...base,
        color: state.selectProps.menuIsOpen ? '#c4c4c4' : base.color,
    }),
};

export default class BuildingInput extends Component{

    constructor(props){
        super(props);

        this.state = {
            selectedOption: "none"
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.giveValue = this.giveValue.bind(this);




    }

    giveValue(){
        return this.state.selectedOption;
    }
    handleSubmit(){
        console.log("triggered" + this.state);
    };


    handleChange = (selectedOption) => {
        this.setState({selectedOption: selectedOption.value});
        console.log(selectedOption.value);
    };
    render() {
        return (
            <div id={"wrapper"}>
                <div id={"idInput"}>
                    <Select
                        styles={styles}
                        placeholder={"Enter a building ID..."}
                        noOptionsMessage={()=>"Sorry, building ID not found"}
                        isClearable={true}
                        isSearchable={true}
                        options={buildingID}
                        onChange={this.handleChange}
                    />
                </div>
                <div id={"submitButton"}>
                    <Link  to={"/report/"+this.state.selectedOption}>
                        <SubmitButton> Submit </SubmitButton>
                    </Link>
                </div>
            </div>
        )
    }
}