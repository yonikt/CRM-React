import React, { Component } from 'react';
import Hottest from './Hottest';
import Emails from './Emails';



class Analytics extends Component {
  render() {
    return (
      <div>
        <Hottest user={this.props.users} />
        <Emails user={this.props.users} />
      </div>
    )
  }
}


export default Analytics;