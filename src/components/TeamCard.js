import React, { Component } from 'react';

export default class TeamCard extends Component {
    render() {

        let {team_name, overall, player_img, name, id} = this.props.player

        return(
            <div className ="team-card">
             {team_name} &nbsp;
              <div /*text-align= "right" align-items= "right"justify-content= "right"*/>
               OVR: {overall} 
              </div>
               <img src={player_img}alt = "avatar" width = "200" height = "150"/> &nbsp; &nbsp; &nbsp; &nbsp; 
               <span> 
                {name}
                </span>    
                &nbsp;  <button type="button" className="remove-button" onClick={()=>this.props.removePlayer(id, this.props.playerteams)} >Remove Player</button>
            </div>
        )
    }
}