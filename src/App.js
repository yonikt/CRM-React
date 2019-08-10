import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import './App.css';
import Clients from './components/Clients';
import Actions from './components/Actions';
import Analytics from './components/Analytics';
const axios = require('axios')


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {users: [], rowsToDisplay: 17}
    this.showMore = this.showMore.bind(this)
    this.showLess = this.showLess.bind(this)
  }
  

  async getUsers() {
    return axios.get("http://localhost:9988/data")
  }

  async componentDidMount() {
    const response = await this.getUsers()
    this.setState({ users: response.data })
  }

  showMore() {
    this.setState({ rowsToDisplay: this.state.rowsToDisplay + 17 })
    console.log(this.state.rowsToDisplay)
  }

  showLess() {
    if (this.state.rowsToDisplay > 1) {
      this.setState({ rowsToDisplay: this.state.rowsToDisplay - 17 })
    }
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
          <Route exact path="/clients" render={() => <Clients showMore={this.showMore} showLess={this.showLess} rowsToDisplay={this.state.rowsToDisplay} data={this.state.users.slice(0, this.state.rowsToDisplay)} allData={this.state.users} />} />
          <Route exact path="/actions" render={() => <Actions users={this.state.users} />} />
          <Route exact path="/analytics" render={() => <Analytics users={this.state.users} />} />

        </div>
      </Router>
    )
  }
}

export default App;



