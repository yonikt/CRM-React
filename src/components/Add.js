import React, { Component } from 'react';
const axios = require('axios')

export default class Add extends Component {

    constructor() {
        super()
        this.state = { name: "", surname: "", country: " ", owner: " " }
    }

    add = async () => {
        const user = {
            name: this.state.name + " " + this.state.surname,
            email: "foo@elevation.com",
            firstContact: new Date(),
            emailType: "B",
            sold: "true",
            owner: this.state.owner,
            country: this.state.country
        }
        return axios.post("http://localhost:9988/add", user)
            .then(res => { console.log(res.data) })
    }

    render() {
        return (
            <div>
                <h4>Add Client</h4>
                Name: <input value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })}></input> <br></br>
                Surname: <input value={this.state.surname} onChange={(e) => this.setState({ surname: e.target.value })}></input> <br></br>
                Country: <input value={this.state.country} onChange={(e) => this.setState({ country: e.target.value })}></input> <br></br>
                Owner: <input value={this.state.owner} onChange={(e) => this.setState({ owner: e.target.value })}></input> <br></br>
                <br></br>  <button onClick={this.add}>Add New Client</button>
            </div>
        );
    }
}
