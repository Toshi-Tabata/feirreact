// let perfSoln = require("./data/perfSoln");
//
// const bID = "UNSW01"; // get this from query string
// let b = perfSoln.performanceSolutions.filter((obj)=> obj.buildingIdentifier === bID);
// console.log(b[0].buildingName);
//

const myObject = {
    performanceSolutions:[
        {
            measure: "td1",
            observation: "td2",
            actionArising: "td3",
        },
        {
            MitigationMeasure: "td4",
            Observation: "td5",
            ActionArising: "td6",

        },
        {
            measure: "td7",
            observation: "td8",
            actionArising: "td9",
        },
    ],
};



function getMitigationArray(){
    const ps = myObject.performanceSolutions;
    let mMarray = ps; // array of mitigation measure objects
    return mMarray.reduce(function(result, obj){
        let tableRow = [obj.measure, obj.observation, obj.actionArising];
        if (!tableRow.includes(undefined)){
            result.push(tableRow)
        }
        return result
    }, []);
    // TODO: For each mitigation measure object, create an array of [mM, Obs, aA]
    // TODO: then nest each of those arrays within an array
}

console.log(getMitigationArray());