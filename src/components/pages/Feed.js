import React, { Component } from 'react';
import '../stylesheets/Feed.css';

class Feed extends Component {
  render () {
    return (
      <div class="feed-bottom">

        <div class="feed-left">
          <div class="feed-posts feed-box">
            <p class="feed-header">Posts</p>
          </div>
        </div>

        <div class="feed-right">
          <div class="feed-intro feed-box">
            <p class="feed-header">Members</p>
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
