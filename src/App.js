import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {withRouter} from 'react-router'
import { render } from '@testing-library/react';
// import Exhibition from './components/Exhibition's
import MyTeam from './components/MyTeam'
import PlayerCard from './components/PlayerCard'
import TeamCard from './components/TeamCard'
import Players from './components/Players'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp';
import Exhibition from './components/Exhibition';

class App extends Component {
  
  state = {
    allplayerdata: [],
    team: null,
    players:[],
    username: "",
    user: null
  }   

  componentDidMount() {
    if(localStorage.token){
      fetch('http://localhost:3000/api/v1/get_user', {
        headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.token}`
        }
      })
      .then(resp => resp.json())
      .then(user => {
        console.log(user)
        this.setState({
          username: user.username,
          players: user.players,
          team: user.team.id,
          user: user
        })
      })
    }


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
      return this.state.players.map(player =>
        <TeamCard
      key = {player.id} 
      name = {player.name} 
      overall = {player.overall} 
      playerimg = {player.player_img} 
      teamname = {player.team_name} 
      removePlayer = {this.removePlayer} />)
    }  
  }

  addPlayer = (player) => {
    // console.log('its working')

    fetch('http://localhost:3000/teams',
    {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(player)
    })
    .then(res=>res.json())
    .then(data=> data
      // this.setState({
      // team: [...this.state.team]
      // })
    )
  }

  removePlayer = () => {
    console.log('its working')
  }

  handleUsername = (username) => {
    
    // console.log(e.target.name)
    this.setState({
      username: username
    })
    console.log(this.state.username)
  }



  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" render={(routeProps) => <LogIn {...routeProps} logIn={this.logIn} handleUsername={this.handleUsername} />} />
          <Route exact path="/signup" render={(routeProps) => <SignUp {...routeProps} signUp={this.signUp} handleUsername={this.handleUsername} username={this.state.username} />} />
          <Route path= "/players" render={(props) => (<Players {...props} generatePlayerCards={this.generatePlayerCards} addPlayer={this.addPlayer} isAuthed={true} username={this.state.username} />)} />
          <Route path= "/myteam" render={(props) => (<MyTeam {...props} generateTeamCards={this.generateTeamCards} removePlayer={this.removePlayer} isAuthed={true} username={this.state.username} />)} />
          <Route path= "/exhibition" render={(props) => (<Exhibition {...props} username={this.state.username} logOut={this.props.logOut} />)}/>
        </div>
     </BrowserRouter>
    ); 
  } 
}

export default withRouter(App)

