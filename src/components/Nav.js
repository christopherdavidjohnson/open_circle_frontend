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
          {this.props.isLoggedIn ?
            <div className="navbar">

              <div className="nav">
                <Link to="/circles">Circles</Link>
              </div>

              <div className="nav">
                <Link to="/messages">Messages</Link>
              </div>

              <div className="nav">
                <Link to="/feed/:circle_id">Feed</Link>
              </div>

              <Link to='/logout' onClick={this.props.handleClick}>Log Out</Link>

            </div> : null
            }
            <Switch>
              <Route
                path="/profile/:id"
                render={props=>(
                  <Profile {...props}/>
                )}
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
                path="/feed/:circle_id"
                render={props=> (
                  <Feed user={ this.props.user } circles={ this.props.circles } {...props}/>
                )}
              />;
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
                  <Login {...props}
                  circles={this.props.circles} handleLogin={this.props.handleLogin} loggedInStatus={this.props.isLoggedIn}/>
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
