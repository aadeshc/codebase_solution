import React from 'react'

const ReusableDDL = (props) => {
    let inputData = [];
    let flag = true;
    //check data type , if its not array or object, return error
    if (typeof (props.data) != "object") {
        console.log("Please provide key value pair data")
        return (
            <select>
                <option>Not Valid Data</option>
            </select>
        )

    } else {
        //check if its plain object, bind to drop down
        if (!Array.isArray(props.data)) {
            return (
                <select>
                    <option value={props.data.id}>{props.data.Value}</option>
                </select>
            )
        }
        else {
            //check if its already array of objects
            const isObject = props.data.filter(e => {
                var type = typeof (e)
                return (type == "object")
            })
            //if its plain array without key value pair, convert it into key value pair
            if (isObject.length == 0) {
                inputData = props.data.map((e) => {
                    return ({
                        ID: e,
                        Value: e
                    })
                })
            } else {
                inputData = props.data
            } // true
        }

        debugger;
        console.log(inputData)
        let optionsTemplate = inputData.map(e => <option value={e.ID}>{e.Value}</option>)
        console.log(optionsTemplate)

        return (
            <select id={props.ID} onChange={(e) => { props.onChange(e) }} >
                {optionsTemplate}
            </select>
        )
    }
}

export default ReusableDDL
