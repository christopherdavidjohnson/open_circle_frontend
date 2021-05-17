import React, { Component } from 'react';
import profile from '../images/profile_placeholder.png';
import '../stylesheets/Feed.css';

class Feed extends Component {
  render () {
    return (
      <div class="feed-bottom">

        <div class="feed-left">

          <div class="feed-posts feed-box">
            <p class="feed-header">Posts</p>

            <div class="poster-box">

              <div class="post-header">
                <img class="poster-pic" src={profile} alt="profile" />
                <div class="poster-name"> Person 1 </div>
              </div>
              <div class="post-body">
                <p class="post-text">This is what the user above posted about. I wish I had emmet working so that I could generate some lorem ipsum but instead I'll just have to talk to myself for a while.</p>
              </div>
            </div>

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
          </div>
        </div>
      </div>
    );
  }
}

export default Feed
