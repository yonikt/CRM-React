import React, { Component } from 'react';
import Popup from './Popup';


class Rows extends Component {

    constructor() {
        super()
        this.state = {
            showPopup: false
        }
    }


    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        })
    }

    render() {
        let i = this.props.user
        return (
            <div>
                <table className="tg" onClick={this.togglePopup.bind(this)}>

                    <td  class="tg-0lax">{i.name.split(" ")[0]} </td>
                    <td  class="tg-0lax">{i.name.split(" ")[1]} </td>
                    <td class="tg-0lax">{i.country} </td>
                    <td  class="tg-0lax">{i.firstContact.slice(3, 10)} </td>
                    <td  class="tg-0lax">{i.emailType === null ? "." : i.emailType} </td>
                    <td  class="tg-0lax">{i.sold === "true" ? <img src="https://png.pngtree.com/svg/20161202/da573c8d9d.svg" width="10" alt="not found"></img> : "-"} </td>
                    <td  class="tg-0lax">{i.owner} </td>

                </table>


                {this.state.showPopup ? <Popup text={i} closePopup={this.togglePopup.bind(this)} /> : null}

            </div>
        )
    }
}


export default Rows;