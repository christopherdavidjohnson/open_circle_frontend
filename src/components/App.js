import React, { Component } from 'react';
import Nav from './Nav';
// import { withRouter } from 'react-router-dom';

import axios from 'axios';

import './stylesheets/App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {},
      circle: ''
    };
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
      console.log('logged in?', response);
    })
    .catch(error => console.log('api errors:', error))
  }

  //for logout button
  _handleClick = () => {
    axios.delete('https://open-circle-server.herokuapp.com/logout', {withCredentials: true}).then(response => {
    this.handleLogout();
    console.log(this);
    window.location.hash= '/';
   }).catch(error => console.log(error))
  }

  handleLogin = (data) => {
    console.log(data);
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
    console.log("loggedin status at logout", this.state.isLoggedIn)
  }

  render() {
    return (
      <Nav
          handleClick = { this._handleClick }
          handleLogin = { this.handleLogin }
          isLoggedIn = {this.state.isLoggedIn}
          user = {this.state.user}
      />
    );
  }
}
export default App;
