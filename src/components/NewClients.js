import React, { Component } from 'react';

class NewClients extends Component {

    getMonth = () => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"]
        const d = new Date()
        return monthNames[d.getMonth()]
    }

    render() {

        return (

            <div class="slider">
                <div class="legend"></div>
                <div class="content">
                    <div class="content-txt">
                        <h1> {this.props.user.filter(i => i.firstContact.includes("08-19") ).length}</h1>
                        <h2>New {this.getMonth()} Clients</h2>
                    </div>
                </div>
                <div class="image">
                    <img src="https://ak7.picdn.net/shutterstock/videos/20334007/thumb/9.jpg"></img>
                </div>
            </div>
        )
    }
}

export default NewClients;