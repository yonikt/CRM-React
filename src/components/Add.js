import React, { Component } from 'react';
const axios = require('axios')

class Add extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            surname: "",
            country: " ",
            owner: " "
        }
    }

    handleInput1 = async (e) => {
        let value = e.target.value
        await this.setState({ name: value })
    }

    handleInput2 = async (e) => {
        let value = e.target.value
        await this.setState({ surname: value })
    }

    handleInput3 = async (e) => {
        let value = e.target.value
        await this.setState({ country: value })
    }

    handleInput4 = async (e) => {
        let value = e.target.value
        await this.setState({ owner: value })
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

        return axios.post("/add", user)
            .then(res => { console.log(res.data) })
    }

    render() {
        return (
            <div>
                <h4>Add Client</h4>
                Name: <input value={this.state.name} onChange={this.handleInput1}></input> <br></br>
                Surname: <input value={this.state.surname} onChange={this.handleInput2}></input> <br></br>
                Country: <input value={this.state.country} onChange={this.handleInput3}></input> <br></br>
                Owner: <input value={this.state.owner} onChange={this.handleInput4}></input> <br></br>
                <br></br>  <button onClick={this.add}>Add New Client</button>
            </div>
        );
    }
}

export default Add;

