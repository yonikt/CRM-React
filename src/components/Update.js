import React, { Component } from 'react';
const axios = require('axios')

export default  class Update extends Component {
    constructor() {
        super()
        this.state = { name: "", transferTo: "", email: "" }
    }

    handleInput1 = async (e) => {
        let value = e.target.value
        await this.setState({ name: value })
    }

    handleInput2 = async (e) => {
        let value = e.target.value
        await this.setState({ transferTo: value })
    }

    handleEmail = async (e) => {
        let value = e.target.value
        await this.setState({ email: value })
    }

    transfer = async () => {
        return axios.put("http://localhost:9988/transfer", {
            name: this.state.name,
            owner: this.state.transferTo
        })
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    }

    email = async () => {
        return axios.put("http://localhost:9988/email", {
            name: this.state.name,
            email: this.state.email
        })
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    }


     sale = async () => {
        return axios.put("http://localhost:9988/sale", {
            name: this.state.name,
            sold: "true"
        })
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        let i = this.props.user
        return (
            <div>
                <h4>Update</h4>
                <span><input list="names" placeholder="Client Name" onChange={this.handleInput1} ></input> <br></br>
                    <datalist id="names">
                        {i.map(i => <option value={i.name}></option>)}
                    </datalist></span> <br></br>
                <input list="owners" placeholder="Transfer Ownership To" onChange={this.handleInput2} ></input>
                <datalist id="owners">
                    {i.map(i => <option value={i.owner}></option>)}
                </datalist>
                <button onClick={this.transfer}>Transfer</button>
                <br></br>
                <span><input list="emails" placeholder="Send Email" onChange={this.handleEmail} ></input>
                <datalist id="emails">
                    <option value="A"></option><option value="B"></option><option value="C"></option><option value="D"></option>
                </datalist></span>
                <button onClick={this.email}>Send</button>
                <br></br> <br></br>
              <button onClick={this.sale}>Declare Sale</button>
                <hr></hr>
            </div>
        )
    }
}
