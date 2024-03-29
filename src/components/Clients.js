import React, { Component } from 'react';
import Rows from './Rows';
import Column from './Column';

class Clients extends Component {

    constructor() {
        super()
        this.state = {
            word: " ",
            select: "name",
            showPopup: false
        }
    }


    handleInput = (e) => {
        let value = e.target.value
        this.setState({ word: value })
    }

    handleSelect = async (e) => {
        let value = e.target.value
        await this.setState({ select: value })
    }


    render() {

        return (
            <div>
                <input placeholder="Search" value={this.state.name} onChange={this.handleInput}></input>
                <select value={this.state.select} onChange={this.handleSelect} >
                    <option value="name">Name</option>
                    <option value="email">Email</option>
                    <option value="sold">Sold</option>
                    <option value="owner">Owner</option>
                    <option value="country">Country</option>
                </select>

                <Column />

                {this.state.word === " " ? this.props.data.map(i => <Rows users={i} />) :
                    this.props.allData.filter(i => (i.name.includes(this.state.word) && this.state.select === "name") ||
                        (i.email.includes(this.state.word) && this.state.select === "email") ||
                        (i.sold === "true" && this.state.select === "sold") ||
                        (i.owner.includes(this.state.word) && this.state.select === "owner") ||
                        (i.country.includes(this.state.word) && this.state.select === "country")).map(i => <Rows users={i} />)}

                {this.props.data.length > 0 ? <span><br></br> <button id="next" onClick={this.props.showLess}>«</button></span> : null}
                {this.props.rowsToDisplay > 0 && this.props.data.length > 0 ? <span> {this.props.rowsToDisplay - 16} - {this.props.rowsToDisplay} </span> : null}
                {this.props.data.length > 0 ? <button id="previous" onClick={this.props.showMore}>»</button> : null}

            </div>
        )
    }
}

export default Clients;