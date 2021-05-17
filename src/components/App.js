import React, { Component } from 'react';
import { HashRouter as HashRouter, Switch, Route, Link} from "react-router-dom";
import axios from 'axios'
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
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

  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in',
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

  render() {
    return (
      <HashRouter>
        <div className="App">
          <div className="navbar">
            <div className="nav">
              <Link to="/homepage">Home</Link>
            </div>

            <div className="nav">
              <Link to="/login">Login</Link>
            </div>

            <div className="nav">
              <Link to="/signup">Signup</Link>
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
          </div> 
          <Switch>

            <Route path="/login" component={Login}/>;
            <Route path="/signup" component={Signup}/>;
            <Route path="/profile" component={Profile}/>;
            <Route path="/circles" component={Circles}/>;
            <Route path="/messages" component={Messages}/>;
            <Route path="/feed" component={Feed}/>;
            <Route path="/" component={Home}/>;

          </Switch>
        </div>
      </HashRouter>
    );
  }
}
export default App;
