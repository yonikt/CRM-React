import React, { Component } from 'react';
const axios = require('axios')

class Popup extends Component {

    constructor() {
        super()
        this.state = {
            country: "",
            name: ""
        }
    }

    handleInput = async (e) => {
        let value = e.target.value
        await this.setState({ country: value })
    }

    handleName = async (e) => {
        let value = e.target.value
        await this.setState({ name: value })
    }


    update = async () => {
        return axios.put("http://localhost:9988/update", {
            _id: this.props.text._id,
            name: this.state.name + " " + this.props.text.name.split(" ")[1],
            country: this.state.country
        })
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <button id="exit" onClick={this.props.closePopup}> x </button> <br></br>
                    <span>Name:  <input defaultValue={this.props.text.name.split(" ")[0]} onChange={this.handleName}></input></span>
                    <br></br>
                    <span>Surname: <input defaultValue={this.props.text.name.split(" ")[1]}></input></span>
                    <br></br>
                    <span>Country: <input defaultValue={this.props.text.country} onChange={this.handleInput}></input> </span>
                    <br></br>  <button onClick={this.update}>Update</button>
                </div>
            </div>
        );
    }
}

export default Popup;