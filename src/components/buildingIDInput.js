import React, {Component} from "react";
import Select from "react-select";
import "../style/buildingInput.css"
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

    handleChange = (selectedOption) => {
        this.setState({selectedOption});
    };
    render() {
        return (
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
                <button>submit this</button>
            </div>
        )
    }
}