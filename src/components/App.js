import React, { Component } from 'react';
import Nav from './Nav';
import { withRouter } from 'react-router-dom';

import axios from 'axios';

import './stylesheets/App.css';

const SERVER_URL_CIRCLES = "https://open-circle-server.herokuapp.com/circles";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {},
      circles: [],
      currentCircle: ''
    };
  }

  componentDidMount() {
    this.loginStatus();
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

  fetchCircles = () => {
    axios.get(`${SERVER_URL_CIRCLES}?user_id=${this.state.user.id}`).then((results) => {
      console.log("the results are", results);
      this.setState({ circles: results.data });
      // setTimeout(fetchCircles, 30000);
    });
  };

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
    console.log('logged in fetching circles');
    this.fetchCircles();
  }
  handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
    console.log("loggedin status at logout", this.state.isLoggedIn)
  }

  render() {
    console.log('App.js logged in state', this.state.isLoggedIn)
    console.log('App.js circles state', this.state.circles)
    return (
      <Nav
          handleClick = { this._handleClick }
          handleLogin = { this.handleLogin }
          isLoggedIn = {this.state.isLoggedIn}
          user = {this.state.user}
          circles = {this.state.circles}
      />
    );
  }
}
export default App;
