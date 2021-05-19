import React, { Component } from 'react';
import { HashRouter as HashRouter, Switch, Route, Link} from "react-router-dom";
import axios from 'axios'
import Home from "./pages/Home";
import Login from './pages/registrations/Login'
import Signup from './pages/registrations/Signup'
import Profile from "./pages/Profile";
import Circles from "./pages/Circles";
import Messages from "./pages/Messages";
import Feed from "./pages/Feed";

import './stylesheets/App.css';

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    console.log('logout buttton test', this.props.isLoggedIn);
    return (
      <div className="navdiv">
        <HashRouter>
          <div className="App">
            <div className="navbar">
              <div className="nav">
                <Link to="/">Home</Link>
              </div>

              <div className="nav">
                <Link to="/profile">Profile</Link>
              </div>

              <div className="nav">
                <Link to="/circles">Circles</Link>
              </div>

              <div className="nav">
                <Link to="/messages">Messages</Link>
              </div>

              <div className="nav">
                <Link to="/feed">Feed</Link>
              </div>

              {
                this.props.isLoggedIn ?
                <Link to='/logout' onClick={this.props.handleClick}>Log Out</Link> : null
              }

            </div>
            <Switch>
              <Route
                path="/profile/:id"
                component={ Profile }
              />;
              <Route
                exact path="/profile"
                render={props=>(
                  <Profile user={ this.props.user }/>
                )}
              />;
              <Route
                path="/circles"
                render={props=>(
                  <Circles user={ this.props.user }/>
                )}
              />;
              <Route
                path="/messages"
                render={props=>(
                  <Messages user={ this.props.user } />
                )}/>;
              <Route
                path="/feed"
                render={props=> (
                  <Feed user={ this.props.user } />
                )}
              />;
              <Route
                path='/login'
                render={props => (
                <Login {...props} handleLogin={this.props.handleLogin} loggedInStatus={this.props.isLoggedIn}/>
                )}
              />
              <Route
                path='/signup'
                render={props => (
                <Signup {...props} handleLogin={this.props.handleLogin} loggedInStatus={this.props.isLoggedIn}/>
                )}
              />
              <Route
                exact
                path="/"
                render={props => (
                <Home loggedInStatus={this.props.isLoggedIn}/>
                )}
              />;

            </Switch>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default Nav
