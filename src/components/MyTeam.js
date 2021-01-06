import React, { Component } from 'react';
import PlayerCard from './PlayerCard';
import { NavigationBar } from './NavigationBar';

export default class Players extends Component {
    state = {
        team: []
    }   

    componentDidMount() {
        fetch('http://localhost:3000/api/v1/teams')
    .then(res=>res.json())
    .then(data=> {
        console.log(data)
        this.setState({
            team: data
        })
    })
}

generateTeamCards = () => {
     let myteam = this.state.team.find(t=> t.id ===1)
     console.log(this.state.team)
}

render() {
    return(
        <div>
            <NavigationBar />
            <h1 id= "team-header">
                My team:
            </h1>
             <div className= "wrapper">
                {this.generateTeamCards()}
             </div>
        </div>
    )
}
}
//what we want to do here is take the team with the same user_id as the current user (user.id) and 
//then display each individual player that is assinged to that team through a PlayerTeam
// lets start by displaying a team with static user id