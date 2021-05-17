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

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {}
    };
    this._handleClick = this._handleClick.bind(this);
  }

  componentDidMount() {
    this.loginStatus()
  }

  loginStatus = () => {
    axios.get('https://open-circle-server.herokuapp.com/logged_in',
   {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }

  //for logout button
  _handleClick = () => {
    axios.delete('https://open-circle-server.herokuapp.com/logout', {withCredentials: true}).then(response => {
    this.handleLogout()
    this.history.push('/')
   }).catch(error => console.log(error))
  }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }
  handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }

  render() {
    return (
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
              this.loggedInStatus ?
              <Link to='/logout' onClick={this._handleClick}>Log Out</Link> : null
            }

          </div>
          <Switch>
            <Route path="/profile" component={Profile}/>;
            <Route path="/circles" component={Circles}/>;
            <Route path="/messages" component={Messages}/>;
            <Route path="/feed" component={Feed}/>;
            <Route
              path='/login'
              render={props => (
              <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
            <Route
              path='/signup'
              render={props => (
              <Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
            <Route
              path="/"
              render={props => (
              <Home {...props} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />;

          </Switch>
        </div>
      </HashRouter>
    );
  }
}
export default App;
