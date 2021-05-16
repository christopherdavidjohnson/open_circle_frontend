import React, { Component } from 'react';
import '../stylesheets/Profile.css';

class Profile extends Component {

  render () {

    return (
      <div class="container">
        <div class="profile-top">

          <div class="name-and-picture">

            <div class="banner-picture-div">
              <img class="banner-picture" src="https://rejuvage.com/wp-content/uploads/2017/02/secondary-banner-placeholder.jpg" alt="banner" />
            </div>

            <img class="profile-picture" src="https://schooloflanguages.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq-300x300.jpg" alt="profile" />

            <p class="profile-name">Person 1</p>
          </div>

          <span class="profile-nav">
            <p class="posts">Posts</p>
            <p id="photos">Photos</p>
            <p id="about">About</p>
          </span>
        </div>

        <div class="profile-bottom">

          <div class="profile-left">
            <div class="profile-intro">
              <p class="profile-header">Intro</p>
            </div>
            <div class="profile-photos">
              <p class="profile-header">Photos</p>
            </div>

          </div>


          <div class="profile-right">

            <div class="profile-posts">
              <p class="profile-header">Posts</p>
            </div>

          </div>

        </div>
      </div>
    )
  }
}

export default Profile;
