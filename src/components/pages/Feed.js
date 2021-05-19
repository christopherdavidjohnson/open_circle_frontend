import React, { Component } from 'react';
import CircleNav from '../navs/CircleNav';
import Post from '../Post.js';
import SubmitPost from '../forms/SubmitPost.js';
import { Link } from 'react-router-dom';

import axios from "axios";

import profile from '../images/profile_placeholder.png';
import banner1 from '../images/banner.png';
import banner2 from '../images/banner_winter.png';
import banner3 from '../images/banner_winter2.png';
import banner4 from '../images/banner3.png';

import '../stylesheets/Feed.css';

const SERVER_URL = "https://open-circle-server.herokuapp.com/posts.json";



class Feed extends Component {

  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    const fetchPosts = () => {
      axios.get(SERVER_URL, {withCredentials: true}).then((results) => {

        this.setState({ posts: results.data });
        setTimeout(fetchPosts, 4000);
      });
    };
  fetchPosts();
  }

  render () {
    return (
      <div className="container">
      <div>
        <CircleNav user={this.props.user}/>
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




<SubmitPost/>



              </div>
            </div>

            {this.state.posts.map((p) => (
              <Post data={p}/>
            ))}
          </div>
        </div>

        <div className="feed-right">

          <div className="feed-members feed-box">
            <p className="feed-header">Members</p>

            <Link to={`/profile/edit/${this.props.user.id}`}>
              <div className="members-box members-box-self">
                <img className="member-pic member-pic-self" src={this.props.user.profile_image} alt="profile" />
                <div className="member-name member-name-self"> Edit {this.props.user.name} </div>
              </div>
            </Link>

            {this.state.posts.map((m) => (

              <Link to={`/profile/${m.user.id}`}>
                <div className="members-box">
                  <img className="member-pic" src={m.user.profile_image} alt="profile" />
                  <div className="member-name"> {m.user.name} </div>
                </div>
              </Link>

          ))}

          </div>

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
              </div></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feed
