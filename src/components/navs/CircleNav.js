import React, { Component } from 'react';
import axios from "axios";
import '../stylesheets/CircleNav.css';

const SERVER_URL = "https://open-circle-server.herokuapp.com/circles";

class CircleNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      circles: [],
    };
  }

  componentDidMount() {
    const fetchCircles = () => {
      axios.get(SERVER_URL).then((results) => {

        this.setState({ circles: results.data });
        setTimeout(fetchCircles, 4000);
      });
    };
  fetchCircles();
  }

  render () {
    console.log(this.state.circles)
    return (
      <div>
        <h1>CIRCLE NAV HERE {this.props.user.name}</h1>
        hot{this.state.circles.map((c)=>(
          <p>Hey there {c.name}</p>
        ))}dogs
      </div>

    );
  }
}

export default CircleNav
