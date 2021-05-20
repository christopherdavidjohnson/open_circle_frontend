import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";


import CircleNav from '../navs/CircleNav';
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
      users: []
    };
  }

  componentDidMount() {
    const fetchPosts = () => {
      const url=`${SERVER_URL_POSTS}?circle_id=${this.props.match.params.circle_id}`
      console.log(url);
      axios.get(url).then((results) => {
        console.log("posts results on feed", results)
        this.setState({ posts: results.data });
        setTimeout(fetchPosts, 30000);
      });
    };

    const fetchUsers = () => {
      axios.get(SERVER_URL_USERS).then((results) => {
        console.log("USERS IN MEMBER BOX on feed", results);
        console.log(SERVER_URL_USERS);
        this.setState({ users: results.data });
        setTimeout(fetchUsers, 30000);
      });
    }

  fetchPosts();
  fetchUsers();
  }

  render () {
    console.log("the posts are", this.state.posts);
    return (
      <div className="container">
        <h1>{this.props.user.name}</h1>
        <div>
          <CircleNav user={ this.props.user } circles={ this.props.circles }/>
        </div>

      <div className="feed-bottom">

        <div className="feed-left">

          <div className="feed-posts feed-box">
            <p className="feed-header">Posts</p>

            <div className="post-box">
              <div className="post-header">
                <img className="poster-pic" src={this.props.user.profile_image} alt="profile" />
                <div className="post-name-and-time">
                  <div className="poster-name">{this.props.user.name} </div>
                </div>
              </div>
              <div className="post-body">
                <SubmitPost user={this.props.user}/>
              </div>
            </div>

            {this.state.posts.map((p) => (
              <Post data={p}/>
            ))}
          </div>
        </div>

        <div className="feed-right">

          <CircleMembers currentUser={this.props.user} friends={this.state.users}/>

          <div className="feed-photos feed-box">
            <p className="feed-header">Photos</p>

            <div className="feed-photos-container">

              <div className="feed-photo-container">
                <img className="feed-photo-thumbnail" src={banner1} alt="profile" />
              </div>

              <div className="feed-photo-container">
              </div>

              <div className="feed-photo-container">
              </div>

              <div className="feed-photo-container">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Feed;
