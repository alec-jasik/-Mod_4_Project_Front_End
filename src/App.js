import React, { Component } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { render } from "@testing-library/react";
// import Exhibition from './components/Exhibition's
import MyTeam from "./components/MyTeam";
import PlayerCard from "./components/PlayerCard";
import TeamCard from "./components/TeamCard";
import Players from "./components/Players";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";

export default class App extends Component {
  state = {
    allplayerdata: [],
    team: null,
    players: [],
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/players")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          allplayerdata: data,
        });
      });
    fetch("http://localhost:3000/api/v1/teams")
      .then((res) => res.json())
      .then((data) => {
        // note that this will change to t where user id = current user id
        let current_team = data.find((t) => t.id === 2);
        console.log(current_team.players)
        this.setState({
          team: current_team.id,
          players: current_team.players,
        });
      });
  }

  generatePlayerCards = () => {
    if (this.state.allplayerdata) {
      return this.state.allplayerdata.map((player) => (
        <PlayerCard
          key={player.id}
          player={player}
          team={this.state.team}
          addPlayer={this.addPlayer}
        />
      ));
    }
  };

  generateTeamCards = () => {
    if (this.state.team) {
      return this.state.players.map((player) => (
        <TeamCard
          key={player.id}
          player={player}
          team={this.state.team}
          removePlayer={this.removePlayer}
        />
      ));
    }
  };

  addPlayer = (player, teamid) => {
    let playerIsOnTeam = () => {
      let teamplayer = this.state.players.filter(
        (p) => p.id == player.id
      );

      if (teamplayer.length > 0) {
        return true;
      } else {
        return false;
      }
    };
    if (this.state.players.length < 5) {
      if (playerIsOnTeam()) {
        alert("This player is already on your team");
      } else {
        let player_team_data = {
          player_id: player.id,
          team_id: teamid,
        };
        fetch("http://localhost:3000/api/v1/player_teams", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(player_team_data),
        })
          .then((res) => res.json())
          .then((data) =>
            this.setState({
              players: [...this.state.players, player],
            })
          );
      }
    } else {
      alert("You already have 5 players on your team");
    }
  };

  removePlayer = () => {
    fetch("http://localhost:3000/api/v1/player_teams", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(),
        })
          .then((res) => res.json())
          .then((data) => data,
          );
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavigationBar />
          <Route
            exact
            path="/"
            render={(routeProps) => <LogIn {...routeProps} />}
          />
          <Route
            exact
            path="/signup"
            render={(routeProps) => <SignUp {...routeProps} />}
          />
          <Route
            path="/players"
            render={(props) => (
              <Players
                {...props}
                generatePlayerCards={this.generatePlayerCards}
                addPlayer={this.addPlayer}
                isAuthed={true}
              />
            )}
          />
          <Route
            path="/myteam"
            render={(props) => (
              <MyTeam
                {...props}
                generateTeamCards={this.generateTeamCards}
                removePlayer={this.removePlayer}
                isAuthed={true}
              />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}
