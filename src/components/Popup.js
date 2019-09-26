import React, { Component } from 'react';
const axios = require('axios')

export default class Popup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            country: this.props.text.country,
            name: this.props.text.name.split(" ")[0] + " " + this.props.text.name.split(" ")[1],
            sirName: ""
        }
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
                    <span>Name:  <input defaultValue={this.props.text.name.split(" ")[0]} onChange={(e) => this.setState({ name: e.target.value })}></input></span>
                    <br></br>
                    <span>Surname: <input defaultValue={this.props.text.name.split(" ")[1]} onChange={(e) => this.setState({ sirName: e.target.value })}></input></span>
                    <br></br>
                    <span>Country: <input defaultValue={this.props.text.country} onChange={(e) => this.setState({ country: e.target.value })}></input> </span>
                    <br></br>  <button onClick={this.invokeTwoFuncs}>Update</button>
                </div>
            </div>
        );
    }
}
