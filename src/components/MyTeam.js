import React, { Component } from 'react';
import PlayerCard from './PlayerCard';
import { NavigationBar } from './NavigationBar';

export default class Players extends Component {

render() {
    return(
        <div>
            <NavigationBar />
            <h1 id= "team-header">
                My team:
            </h1>
             <div className= "wrapper">
                {this.props.generateTeamCards()}
             </div>
        </div>
    )
}
}
