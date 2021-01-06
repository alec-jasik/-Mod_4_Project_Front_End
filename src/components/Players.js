import React, { Component } from 'react';
import PlayerCard from './PlayerCard';
import { NavigationBar } from './NavigationBar';



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
        return this.state.playerdata.map(player => <PlayerCard key = {player.id} name = {player.name} overall = {player.overall} playerimg = {player.player_img} teamname = {player.team_name} addPlayer = {this.addPlayer} />)
        console.log(PlayerCard)
    }

    addPlayer = () => {
        console.log('its working')
    }
    render() {
        return (
            <div>
                <div> 
                    <NavigationBar/>
                </div>
                <div className = "wrapper"> 
                    {this.generatePlayerCards()} 
                </div>
            </div>
        )
    }
}