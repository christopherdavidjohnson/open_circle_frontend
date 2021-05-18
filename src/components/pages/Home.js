import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../stylesheets/Home.css';

class Home extends Component {
  render () {
    return (
      <div className="login-signup">
        <h1 className="home_header"> Welcome to the homepage!</h1>
        <Link to='/login'>Log In</Link>
        <Link to='/signup'>Sign Up</Link>
      </div>
    );
  }
}

export default Home
