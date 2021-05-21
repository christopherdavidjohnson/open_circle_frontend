import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";


import Post from '../Post';
import SubmitPost from '../forms/SubmitPost';
import CircleMembers from '../CircleMembers'

import profile from '../images/profile_placeholder.png';
import banner1 from '../images/banner.png';
import banner2 from '../images/banner_winter.png';
import banner3 from '../images/banner_winter2.png';
import banner4 from '../images/banner3.png';

import '../stylesheets/Feed.css';

const SERVER_URL_POSTS = "https://open-circle-server.herokuapp.com/posts";
const SERVER_URL_USERS = "https://open-circle-server.herokuapp.com/users";
class Feed extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      users: [],
      timerID: ''
    };
  }

  componentDidMount() {

    this.props.fetchPosts(this.props.circleId);
    this.props.fetchUsers(this.props.circleId);
    clearInterval(this.state.timerID);
    const id = setInterval(()=>this.props.fetchPosts(this.props.circleId), 2000);
    this.setState({timerID: id});
  }

  render () {
    console.log("the posts are", this.props.posts);
    return (
      <div className="container">
        <h1>Current Circle</h1>

        <div className="feed-bottom">

          <div className="feed-left">

            <div className="feed-posts feed-box">


              <div className="post-box">
                <div className="post-header">
                  <img className="poster-pic" src={this.props.user.profile_image} alt="profile" />
                  <div className="post-name-and-time">
                    <div className="poster-name">{
                      this.props.user.name}
                    </div>
                  </div>
                </div>
                <div className="post-body">
                  <SubmitPost user={this.props.user} circleparam={this.props.circleId}/>
                </div>
              </div>

            {this.props.posts.map((p) => (
              <Post post={p}/>
            ))}
          </div>
        </div>

        <div className="feed-right">

          <CircleMembers currentUser={this.props.user} friends={this.props.users} circleparam={this.props.circleId}
          />


        </div>
      </div>
    </div>
    );
  }
}

export default Feed;
