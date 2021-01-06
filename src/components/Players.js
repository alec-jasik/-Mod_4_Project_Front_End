import React, { Component } from 'react';
import PlayerCard from './PlayerCard';
import { NavigationBar } from './NavigationBar';



export default class Players extends Component {

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