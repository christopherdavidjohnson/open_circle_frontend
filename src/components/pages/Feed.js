import React, { Component } from 'react';
import CircleNav from '../navs/CircleNav'

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
      axios.get(SERVER_URL).then((results) => {

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

            {this.state.posts.map((f) => (
              <div className="post-box">

                <div className="post-header">
                  <img className="poster-pic" src={f.user.profile_image} alt="profile" />
                  <div className="poster-name">{f.user.name} </div>
                </div>
                <div className="post-body">

                  <p className="post-text"> {f.content}</p>

                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="feed-right">

          <div className="feed-members feed-box">
            <p className="feed-header">Members</p>
          {this.state.posts.map((m) => (
            <div className="members-box">
              <img className="member-pic" src={m.user.profile_image} alt="profile" />
              <div className="member-name"> {m.user.name} </div>
            </div>
                ))}
          </div>

          <div className="feed-photos feed-box">
            <p className="feed-header">Photos</p>

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
    );
  }
}

export default Feed
