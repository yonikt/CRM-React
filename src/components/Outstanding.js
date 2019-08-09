import React, { Component } from 'react';

class Outstanding extends Component {

    render() {
        return (
          



                <div>
                        <h1> {this.props.user.filter(i => i.emailType !=="true").length}</h1>
                        <h2>Outstanding Clients</h2>
                        <hr></hr>
              
            </div>
        )
    }
}

export default Outstanding;