import React, { Component } from 'react'
import '../display.css'
import ReusableDDL from './ReusableDDL'

export default class WorkingSolution extends Component {
    constructor(props) {
        super(props)
        this.Obj = {
            Value: "Aadesh",
            ID: 4
        }
        this.countryArray = ["India", "Japan", "China", "USA", "Russia"]
        this.employeeList = [{
            ID: 1,
            Value: "Aadesh"
        },
        {
            ID: 2,
            Value: "Samruddhi"
        },
        {
            ID: 3,
            Value: "Radhika"
        },
        {
            ID: 4,
            Value: "Snehal"
        }
        ]
    }

    customonChange(e) {
        debugger;
        console.log(e.target.value)
    }


    render() {


        return (
            <div>
                <ReusableDDL ID="ddlArray" data={this.countryArray} onChange={(e) => { this.customonChange(e) }} />
                <ReusableDDL ID="ddlArray" data={this.employeeList} onChange={(e) => { this.customonChange(e) }} />
                <ReusableDDL ID="ddlArray" data="Aadesh" onChange={(e) => { this.customonChange(e) }} />
                <ReusableDDL ID="ddlArray" data={this.Obj} onChange={(e) => { this.customonChange(e) }} />
            </div>

        )
    }
}
