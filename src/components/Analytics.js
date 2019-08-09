import React, { Component } from 'react';
import Hottest from './Hottest';
import Emails from './Emails';
import Outstanding from './Outstanding';
import NewClients from './NewClients';
import TopEmployees from './TopEmployees';
import SalesByCountry from './SalesByCountry';


class Analytics extends Component {
  render() {
    return (
      <div id="charts">

       
            <Hottest user={this.props.users} />
            <Emails user={this.props.users} />
            <Outstanding user={this.props.users} />
            <NewClients user={this.props.users} />
            <TopEmployees user={this.props.users} />
            <SalesByCountry user={this.props.users} />
            
            
       
      </div>
    )
  }
}

export default Analytics;