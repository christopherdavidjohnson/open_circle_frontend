import React, { Component } from 'react';
import axios from "axios";
import '../stylesheets/CircleNav.css';

const SERVER_URL = "http://localhost:3001/circles";

class CircleNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      circles: [],
    };
  }

  componentDidMount() {
    const fetchCircles = () => {
      console.log("FETCHCIRCLES");
      axios.get(SERVER_URL).then((results) => {
        console.log("results", results);
        this.setState({ circles: results.data });
        setTimeout(fetchCircles, 4000);
      });
    };
  fetchCircles();
  }

  render () {
    console.log("mycircles",this.state.circles)
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
