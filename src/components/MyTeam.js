import React, { Component } from 'react';
import PlayerCard from './PlayerCard';
import  NavigationBar  from './NavigationBar';

export default class Players extends Component {

    componentDidMount() {
        if (localStorage.token) {
            // console.log('Logged in')
        }
        else {
            alert("You must be logged in to access this page!")
            this.props.history.push('/')
        }
    }


    render() {
        return (
            <div>
                <NavigationBar username={this.props.username} logOut={this.props.logOut} />
                <h1 id="team-header">
                    My team:
                </h1>
                <div className="wrapper">
                    {this.props.generateTeamCards()}
                </div>
            </div>
        )
    }
}
