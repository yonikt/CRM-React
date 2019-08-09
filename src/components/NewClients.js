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

            <div>
                        <h1> {this.props.user.filter(i => i.firstContact.includes("08-19") ).length}</h1>
                        <h2>New {this.getMonth()} Clients</h2>
                        <hr></hr>
                         <h2>More Analytics</h2>
              
            </div>
        )
    }
}

export default NewClients;