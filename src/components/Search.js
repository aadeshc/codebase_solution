import React, { Component } from 'react'
import Input from '@material-ui/core/Input'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
class Search extends Component {

    constructor(props) {
        super(props)

        this.state = {
            countries: this.props.countries
        }
        this.handlechange = this.handlechange.bind(this)
    }

    handlechange(e) {
        var filterString = e.target.value.toLowerCase()
        debugger;
        var arraytofilter = this.props.countries
        var lowercaseArray = arraytofilter.map((item) => item.toLowerCase())
        var filteredArray;
        var filteredArray = lowercaseArray.filter((el) => {
            return (el.includes(filterString))

        })

        console.log(filteredArray)
        this.setState({
            countries: filteredArray
        })
    }
    render() {
        let countryarray = this.props.countries
        debugger;
        let optionTemplate = this.state.countries.map(c => <li>{c}</li>)
        return (
            <div>
                <Input
                    className="search-box"
                    placeholder="Enter Country Name"
                    onChange={this.handlechange} />
                <Paper>
                    <List>
                        <ListItem>
                            <ul>
                                {optionTemplate}
                            </ul>
                        </ListItem>
                    </List>
                </Paper>

            </div>
        );
    }
}

export default Search;