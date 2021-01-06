import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import { NavigationBar } from './components/NavigationBar';
import { render } from '@testing-library/react';
// import Exhibition from './components/Exhibition's
import MyTeam from './components/MyTeam'
import PlayerCard from './components/PlayerCard'
import TeamCard from './components/TeamCard'
import Players from './components/Players'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp';

export default class App extends Component {
  
  state = {
    allplayerdata: [],
    team: null,
    players:[]
  }   

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/players')
    .then(res=>res.json())
    .then(data=> {
      this.setState({
          allplayerdata: data
      })
    })
    fetch('http://localhost:3000/api/v1/teams')
    .then(res=>res.json())
    .then(data=> {
        // note that this will change to t where user id = current user id  
        this.setState({
            team: data.find(t => t.id === 1)
        })
    })
  }

  generatePlayerCards = () => {
    return this.state.allplayerdata.map(player => 
    <PlayerCard 
      key = {player.id} 
      name = {player.name} 
      overall = {player.overall} 
      playerimg = {player.player_img} 
      teamname = {player.team_name} 
      addPlayer = {this.addPlayer} />
      )
  }

  generateTeamCards = () => {
    if (this.state.team){
      return this.state.team.players.map(player =>
        <TeamCard
      key = {player.id} 
      name = {player.name} 
      overall = {player.overall} 
      playerimg = {player.player_img} 
      teamname = {player.team_name} 
      removePlayer = {this.removePlayer} />)
    }  
  }

  addPlayer = () => {
    console.log('its working')
  }

  removePlayer = () => {
    console.log('its working')
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavigationBar />
          <Route exact path="/" render={(routeProps) => <LogIn {...routeProps} />} />
          <Route exact path="/signup" render={(routeProps) => <SignUp {...routeProps} />} />
          <Route path= "/players" render={(props) => (<Players {...props} generatePlayerCards={this.generatePlayerCards} addPlayer={this.addPlayer} isAuthed={true} />)} />
          <Route path= "/myteam" render={(props) => (<MyTeam {...props} generateTeamCards={this.generateTeamCards} removePlayer={this.removePlayer} isAuthed={true} />)} />
        </div>
     </BrowserRouter>
    ); 
  } 
}

