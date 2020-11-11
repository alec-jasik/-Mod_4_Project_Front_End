import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import { NavigationBar } from './components/NavigationBar';
import { render } from '@testing-library/react';
// import Exhibition from './components/Exhibition's
import MyTeam from './components/MyTeam'
// import PlayerCard from './components/PlayerCard'
import Players from './components/Players'
// import LogIn from './components/LogIn'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <LogIn /> */}
          <NavigationBar />
          <Route path= "/players" component= {Players} />
          <Route path= "/myteam" component= {MyTeam} />
        </div>
     </BrowserRouter>
    ); 
  } 
}