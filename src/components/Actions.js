import React, { Component } from 'react';
import Add from './Add';
import Update from './Update';


class Actions extends Component {
  render() {
    return (
      <div>
        <Update user={this.props.users} />
        <Add />
        
      </div>
    )
  }
}

export default Actions;