import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }`;
export const NavigationBar = () => (
  <Styles>
    <Navbar>    
        <center>
        <Nav className="ml-auto">
        <Nav.Item><Nav.Link href="/myteam">My Team</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/players">Players</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/exhibition">Exhibition</Nav.Link></Nav.Item>
        </Nav>
        </center>s
    </Navbar>
  </Styles>
) 