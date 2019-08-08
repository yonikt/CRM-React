import React, { Component } from 'react';

class Outstanding extends Component {

    render() {
        return (
          



                <div class="slider">
                <div class="legend"></div>
                <div class="content">
                    <div class="content-txt">
                        <h1> {this.props.user.filter(i => i.emailType !=="true").length}</h1>
                        <h2>Outstanding Clients</h2>
                    </div>
                </div>
                <div class="image">
                    <img src="https://brickhousecoffee.co/wp-content/uploads/2017/10/3-Reasons-You%E2%80%99re-More-Productive-in-a-Coffee-Shop-feature-image.jpg"></img>
                </div>
            </div>
        )
    }
}

export default Outstanding;