import React from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components';
import Login from './components/Login';
import Friends from './components/Friends';
import Form from './components/Form';
import PrivateRoute from './components/PrivateRoute';

const Header = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 5vh;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

function App() {
  return (
    <Router>
      <Header>
        <StyledLink to="/">Login</StyledLink>
        <StyledLink to="/friends">Friends</StyledLink>
        <StyledLink to="/add">Add Friend</StyledLink>
      </Header>
      <div className="App-header">
        <PrivateRoute path="/add" component={Form}/>
        <PrivateRoute path="/friends" component={Friends}/>
        <Route exact path="/" component={Login}/>
      </div>
    </Router>
  );
}

export default App;
