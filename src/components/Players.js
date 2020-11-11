import React, { Component } from 'react';
import PlayerCard from './PlayerCard';



export default class Players extends Component {
    
    state = {
        playerdata: []
    }   

    componentDidMount() {
        fetch('http://localhost:3000/api/v1/players')
    .then(res=>res.json())
    .then(data=> {
        this.setState({
            playerdata: data
        })
    })
}
    generatePlayerCards = () => {
        return this.state.playerdata.map(player => <PlayerCard name = {player.name} overall = {player.overall} playerimg = {player.player_img} teamname = {player.team_name} />)
        console.log(PlayerCard)
    }

    render() {
        return (
            <div className = "wrapper"> 
                {this.generatePlayerCards()} 
            </div>
        )
    }
}