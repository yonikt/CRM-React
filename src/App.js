import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import './App.css';
import Clients from './components/Clients';
import Actions from './components/Actions';
import Analytics from './components/Analytics';
const axios = require('axios')



class App extends Component {

  constructor() {
    super()
    this.state = {
      users: []
    }
  }

  async getUsers() {
    return axios.get("http://localhost:9988/data")
  }

  async componentDidMount() {
    const response = await this.getUsers()
    this.setState({ users: response.data })
    // console.log(this.state.users)
  }

  

  render() {
    return (
      <Router>
        <div className="App">


          <ul>
            <li><Link className="active" to="/clients">CLIENTS</Link></li>
            <li><Link to="/actions">ACTIONS</Link></li>
            <li> <Link to="/analytics">ANALYTICS</Link></li>
          </ul>

          <Route exact path="/" render={() => <Redirect to="/clients" />} /> 
          <Route exact path="/clients" render={() => <Clients data={this.state.users} />} />
          <Route exact path="/actions" render={() => <Actions users={this.state.users} />} />
          <Route exact path="/analytics" render={() => <Analytics users={this.state.users} />} />


        </div>
      </Router>
    )
  }
}

export default App;



