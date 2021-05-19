import React, { Component } from 'react';
import axios from "axios";

import './stylesheets/Feed.css';


class Post extends Component {
  constructor() {
    super();
  }
  render () {
    console.log(this.props.data.user.created_at)
    return(
      <div className="post-box">

        <div className="post-header">
          <img className="poster-pic" src={this.props.data.user.profile_image} alt="profile" />
          <div className="post-name-and-time">
            <div className="poster-name">{this.props.data.user.name} </div>
            <div className="post-time">{this.props.data.user.created_at}</div>
          </div>
        </div>
        <div className="post-body">
          <p className="post-text"> {this.props.data.content}</p>
        </div>
      </div>
    );
  }
}

export default Post;
