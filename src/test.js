let perfSoln = require("./data/perfSoln");


const objectCopy = { // smaller representation of perfSoln
    performSoln:[
        {
            "obj1": "Object 1",
            obj2: "undesired",
        },
        {
            "obj1": "Object 2",
            obj2: "undesired2"

        },
        {
            "obj": "Object 2",
            obj2: "undesired2"

        },
    ]
};

// return only objects that contain a buildingIdentifier
const filterArray = perfSoln.performanceSolutions.filter(object => "buildingIdentifier" in object);
console.log(filterArray);

const results = filterArray.map(({buildingIdentifier}) =>
    {return(
        {label: buildingIdentifier,
            value: buildingIdentifier
        }
        )
    }
    );  // create array of building IDs
console.log(results);
