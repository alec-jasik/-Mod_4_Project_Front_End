import React, { Component } from 'react';
import NavigationBar from './NavigationBar'
// import PlayerCard from './PlayerCard';




export default class Players extends Component {

    componentDidMount() {
        if (localStorage.token) {
            console.log('Logged in')
        }
        else {
            alert("You must be logged in to access this page!")
            this.props.history.push('/')
        }
    }

    render() {
        return (
            <div>
                <div> 
                <NavigationBar username={this.props.username} logOut={this.props.logOut}/>
                </div>
                <div className = "wrapper"> 
                    {this.props.generatePlayerCards()} 
                </div>
            </div>
        )
    }
}