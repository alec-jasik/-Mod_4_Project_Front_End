import React, { Component } from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }`;
  
export default class NavigationBar extends Component{

  logOut = () => {
    localStorage.clear()
    console.log("logged out")
  }

  render(){
    return(
      <Styles>
    <Navbar>    
        <center>
        <Nav className="ml-auto">
        <Nav.Item>
          <Nav.Link href="/myteam">My Team</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/players">Players</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/exhibition">Exhibition</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/" onClick={this.logOut} className="logOut">Logout</Nav.Link></Nav.Item> 
        </Nav>
        <h2 className="username"> Hello, {this.props.username}!</h2>
        </center>
    </Navbar>
  </Styles>
    )
  }
  
}