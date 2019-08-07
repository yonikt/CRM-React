import React, { Component } from 'react';


class Hottest extends Component {

  

    render() {
        return (
            <div>
                <h4>Hottest Country: </h4>

                {this.props.user.filter(i => i.country === "Rome").length}
            </div>
        )
    }
}




export default Hottest;