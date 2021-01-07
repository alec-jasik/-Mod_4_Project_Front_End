import React, { Component } from 'react';
import NavigationBar from './NavigationBar';

export default class Exhibition extends Component {

  componentDidMount() {
    if (localStorage.token) {
        console.log('Logged in')
    }
    else {
        alert("You must be logged in to access this page!")
        this.props.history.push('/')
    }
}

  render() {
    return (
      <div>
        <NavigationBar username={this.props.username} logOut={this.props.logOut}/>
        {"this is the exhibition component"}
      </div>
    );
  }

}