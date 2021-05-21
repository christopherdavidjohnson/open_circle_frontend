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
import Self from "./pages/Self";
import CircleNav from './navs/CircleNav';

import './stylesheets/App.css';

const SERVER_URL_POSTS = "https://open-circle-server.herokuapp.com/posts";
const SERVER_URL_USERS = "https://open-circle-server.herokuapp.com/users";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCircleID: '',
    }
  }

  _handleCircleClick = (circle_id) => {
    this.setState({currentCircleID: circle_id})
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

              <Link to='/logout' onClick={this.props.handleClick}>Log Out</Link>

              <CircleNav user={ this.props.user } circles={ this.props.circles }
              circleClick={ this._handleCircleClick }/>

            </div> : null
            }
            <Switch>
              <Route
                path="/profile/:id"
                render={props=>(
                  <Profile {...props} circles={this.props.circles}/>
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
                  <Feed user={ this.props.user } circleId={ this.props.currentCircleID }
                   {...props}/>
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
              <Route
                path="/self/edit/:id"
                render={props=>(
                  <Self user={ this.props.user }
                />
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
