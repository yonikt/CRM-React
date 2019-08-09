import React, { Component } from 'react';
const axios = require('axios')

class Popup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            country: this.props.text.country,
            name: this.props.text.name.split(" ")[0] + " " + this.props.text.name.split(" ")[1],
            sirName: ""
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

    handleSirName = async (e) => {
        let value = e.target.value
        await this.setState({ sirName: value })
    }


    update = async () => {
        return axios.put("http://localhost:9988/update", {
            _id: this.props.text._id,
            name: this.state.name + " " + this.state.sirName,
            country: this.state.country,
        })
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    }

    invokeTwoFuncs=()=>{
        this.update()
        this.props.closePopup()
    }

    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <button id="exit" onClick={this.props.closePopup}> X </button> <br></br>
                    <span>Name:  <input defaultValue={this.props.text.name.split(" ")[0]} onChange={this.handleName}></input></span>
                    <br></br>
                    <span>Surname: <input defaultValue={this.props.text.name.split(" ")[1]} onChange={this.handleSirName}></input></span>
                    <br></br>
                    <span>Country: <input defaultValue={this.props.text.country} onChange={this.handleInput}></input> </span>
                    <br></br>  <button onClick={this.invokeTwoFuncs}>Update</button>
                </div>
            </div>
        );
    }
}

export default Popup;