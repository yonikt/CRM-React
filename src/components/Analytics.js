import React, { Component } from 'react';
import Hottest from './Hottest';
import Emails from './Emails';
import Outstanding from './Outstanding';
import NewClients from './NewClients';


class Analytics extends Component {
  render() {
    return (
      <div>

        <div id="slider">
          <div class="slides">
            <Hottest user={this.props.users} />
            <Emails user={this.props.users} />
            <Outstanding user={this.props.users} />
            <NewClients user={this.props.users} />
            
          </div>
        </div>
      </div>
    )
  }
}

export default Analytics;