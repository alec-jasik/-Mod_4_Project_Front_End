import React, { Component } from 'react';
import PlayerCard from './PlayerCard';



export default class Players extends Component {

    render() {
        return (
            <div className = "wrapper"> 
                {this.props.generatePlayerCards()} 
            </div>
        )
    }
}