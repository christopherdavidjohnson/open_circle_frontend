import React, { Component } from 'react';
import Nav from './Nav';
import axios from 'axios';

import './stylesheets/App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {}
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
      <Nav
          handleClick = { this._handleClick }
          handleLogin = { this.handleLogin }
          isLoggedIn = {this.state.isLoggedIn}
      />
    );
  }
}
export default App;
