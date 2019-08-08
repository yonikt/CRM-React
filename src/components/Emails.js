import React, { Component } from 'react';

class Emails extends Component {

    render() {
        return (

                <div class="slider">
                <div class="legend"></div>
                <div class="content">
                    <div class="content-txt">
                        <h1> {this.props.user.filter(i => i.emailType !=null).length}</h1>
                        <h2>Emails Sent</h2>
                    </div>
                </div>
                <div class="image">
                    <img src="https://cdn.hipwallpaper.com/i/8/34/Buzw4l.jpg"></img>
                </div>
            </div>
        )
    }
}

export default Emails;