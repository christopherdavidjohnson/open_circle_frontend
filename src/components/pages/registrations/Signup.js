import React, { Component } from 'react';
import axios from 'axios';
import '../../stylesheets/Signup.css';

class Signup extends Component {

  constructor(props) {
  super(props);
  this.state = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    errors: ''
   };
  }

  handleChange = (event) => {
    const {name, value} = event.target
      this.setState({
        [name]: value
      })
    };

  handleSubmit = (event) => {
    event.preventDefault()
    const {email, password, password_confirmation} = this.state
    let user = {
      email: email,
      password: password,
      password_confirmation: password_confirmation
    }

    axios.post('https://open-circle-backend.herokuapp.com/users', {user}, {withCredentials: true}).then(response => {
      if (response.data.status === 'created') {
        this.props.handleLogin(response.data)
        this.redirect()
      } else {
        this.setState({
          errors: response.data.errors
        })
      }
    }).catch(error => console.log('api errors:', error))
  };

  redirect = () => {
    this.props.history.push('/feed')
  }

  handleErrors = () => {
    return (
      <div>
        <ul>{this.state.errors.map((error) => {
          return <li key={error}>{error}</li>
        })}
        </ul>
      </div>
    )
  }

  render () {
    const {name, email, password, password_confirmation} = this.state
    return (
      <div>
        <h1> Welcome to the Signup page!</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="name"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
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
          <input
            placeholder="password confirmation"
            type="password"
            name="password_confirmation"
            value={password_confirmation}
            onChange={this.handleChange}
          />

          <button placeholder="submit" type="submit">
            Sign Up
          </button>
        </form>
        <div>
          {
            this.state.errors ? this.handleErrors() : null
          }
        </div>
      </div>
    );
  }
}

export default Signup
