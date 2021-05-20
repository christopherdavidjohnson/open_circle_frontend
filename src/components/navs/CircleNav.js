import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

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
      axios.get(`${SERVER_URL}?user_id=${this.props.user.id}`).then((results) => {
        console.log("the results are", results);
        this.setState({ circles: results.data });
        setTimeout(fetchCircles, 30000);
      });
    };
  fetchCircles();
  }

  render () {
    console.log("mycircles",this.state.circles)
    return (
      <div className='circle-nav'>
        {this.state.circles.map((circle)=>(
          <Link to='/circles'>
          <img className="circle-pic" src={circle.image} alt="profile" />
          </Link>
        ))}
      </div>

    );
  }
}

export default CircleNav
