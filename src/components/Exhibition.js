import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import court from '../img/court.jpg'

var backgroundImage = {
  backgroundImage: `url(${court})`,
  width: '100%',
  height: '100%',
  backgroundSize: 'cover' 
};

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
        <div style = {backgroundImage}>

        </div>
      </div>
    );
  }

}