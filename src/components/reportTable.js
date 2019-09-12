import React, {Component} from "react";
import "../style/reportTable.css";


export default class ReportTable extends Component{
    constructor(props){
        super(props);
        this.state = {
            tableHeading: [],
            tableData: [ [] ],
        }
    }

    getTH(){ // create list of table headings
        let heading = this.props.tableHeading;
        return heading.map(item => { // for each item, contain it in a new <th>
            return(<th className={"tableHeading"} key={item}> {item} </th>)
        });
    }

    getTD(){ // create list of table data
        let data = this.props.tableData;
        if (this.props.tableData === undefined){
            return
        }

        return data.map((item, index) => {

            let rowItem = item.map((data, index) => {
                if (index === 0){
                    return(
                        <td key={index}> {data} </td>
                    )
                } else {
                    // TODO: need to make an onChange handler to store user inputs and changes to obs/aA
                    return (
                        <td key={index}>
                            <textarea className={"textArea"} defaultValue={data}>

                            </textarea>
                        </td>)
                }
            });

            return(
                <tr className={"dataRow"} key={index}>{rowItem}</tr>
            )
        });
    }

    render(){
        return(
            <tbody>
            <tr id={"headingsRow"}>
                {this.getTH()}
            </tr>

            {this.getTD()}

            </tbody>

        )
    }
}