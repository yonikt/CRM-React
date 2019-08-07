import React, { Component } from 'react';


class Emails extends Component {

  

    render() {
        return (
            <div>
                <hr></hr>
                <img src="https://www.freepnglogos.com/uploads/email-logo-png-13.png" width="50"></img>
               <h3> {this.props.user.filter(i => i.emailType !=null).length} </h3> 
               <h3>Emails Sent </h3>
            </div>
        )
    }
}




export default Emails;