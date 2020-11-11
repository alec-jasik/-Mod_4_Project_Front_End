import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Exhibition from './components/Exhibition'
import MyTeam from './components/MyTeam'
import PlayerCard from './components/PlayerCard'
import Players from './components/Players'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp';

export default class App extends Component {
  render() {

    return (

      <BrowserRouter>
        <Route exact path="/" render={(routeProps) => <LogIn {...routeProps} />} />
        <Route exact path="/signup" render={(routeProps) => <SignUp {...routeProps} />} />
        {/* <div> <LogIn /></div> */}
      </BrowserRouter>

    );
  }
}

