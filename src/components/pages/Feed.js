import React, { Component } from 'react';

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

      <div class="feed-bottom">

        <div class="feed-left">

          <div class="feed-posts feed-box">
            <p class="feed-header">Posts</p>

            {this.state.posts.map((f) => (
              <div class="post-box">

                <div class="post-header">
                  <img class="poster-pic" src={profile} alt="profile" />
                  <div class="poster-name">{f.user.name} </div>

                </div>
                <div class="post-body">

                  <p class="post-text"> {f.content}</p>

                </div>
              </div>
            ))}
          </div>
        </div>

        <div class="feed-right">

          <div class="feed-members feed-box">
            <p class="feed-header">Members</p>
            <div class="members-box">
              <img class="member-pic" src={profile} alt="profile" />
              <div class="member-name"> Person 1 </div>
            </div>
          </div>

          <div class="feed-photos feed-box">
            <p class="feed-header">Photos</p>

              <div class="feed-photo-container">
                <img class="feed-photo-thumbnail" src={banner1} alt="profile" />
              </div>

              <div class="feed-photo-container">
              </div>

              <div class="feed-photo-container">
              </div>

              <div class="feed-photo-container">
              </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Feed
