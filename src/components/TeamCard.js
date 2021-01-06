import React, { Component } from 'react';

export default class TeamCard extends Component {
    render() {
        return(
            <div className ="team-card">
             {this.props.teamname} &nbsp;
              <div /*text-align= "right" align-items= "right"justify-content= "right"*/>
               OVR: {this.props.overall} 
              </div>
               <img src={this.props.playerimg}alt = "avatar" width = "200" height = "150"/> &nbsp; &nbsp; &nbsp; &nbsp; 
               <span> 
                {this.props.name}
                </span>    
                &nbsp;  <button type="button" className="remove-button" onClick={()=>this.props.removePlayer()} >Remove Player</button>
            </div>
        )
    }
}