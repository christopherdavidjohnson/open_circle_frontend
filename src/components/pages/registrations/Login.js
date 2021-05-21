import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import circlelogo from '../../images/ciircle.gif';

import '../../stylesheets/Login.css';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: 'joel@ga.co',
      password: 'chicken',
      errors: ''
    };
  }

  componentWillMount() {
    return this.props.loggedInStatus ? this.redirect() : null
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault()
    const {email, password} = this.state
    let user = {
        email: email,
        password: password
      }

    axios.post('https://open-circle-server.herokuapp.com/login', {user}, {withCredentials: true}).then(response => {
      console.log("this is the post request", response.data.logged_in)
      if (response.data.logged_in) {

        this.props.handleLogin(response.data)
        this.redirect()
      } else {
        this.setState({
          errors: response.data.errors
        })
      }
    }).catch(error => console.log('api errors:', error));
  };

  redirect = () => {
    const circles = this.props.circles;
    const circle_id = circles[1].id
    this.props.history.push(`/feed/${circle_id}`)
  }

  handleErrors = () => {
    return (
      <div>
        <ul>
        {this.state.errors.map((error) => {
        return <li key={error}>{error}</li>
          })}
        </ul>
      </div>
    );
  }

  render () {
    const {email, password} = this.state
    return (
    <div className="loginbg">
      <div className="logincontainer">
      <img className="circlelogo" src={circlelogo} alt="circle" />

        <form className="loginform" onSubmit={this.handleSubmit}>
         <input
           placeholder="email"
           type="text"
           name="email"
           value={email}
           onChange={this.handleChange}
         />
         <input
           placeholder="password"
           type="password"
           name="password"
           value={password}
           onChange={this.handleChange}
         />
        <button placeholder="submit" type="submit">
           Log In
         </button>
         <div>
           or <Link to='/signup'>Not a member? Sign up!</Link>
         </div>

        </form>
        <div>
          {
            this.state.errors ? this.handleErrors() : null
          }
        </div>
      </div>
    </div>
    );
  }
}

export default Login
