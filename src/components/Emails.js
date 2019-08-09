import React, { Component } from 'react';

class Emails extends Component {

    render() {
        return (

                <div>
                        <h1> {this.props.user.filter(i => i.emailType !=null).length}</h1>
                        <h2>Emails Sent</h2>
                        <hr></hr>
                
            </div>
        )
    }
}

export default Emails;