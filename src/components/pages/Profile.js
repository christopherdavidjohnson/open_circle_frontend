import React, { Component } from 'react';
import '../stylesheets/Profile.css';
import banner from '../images/banner.png';

class Profile extends Component {

  render () {

    return (
      <div class="container">
        <div class="profile-top">

          <div class="name-and-picture">

            <div class="banner-picture-div">
              <img class="banner-picture" src={banner} alt="banner" />
            </div>

            <img class="profile-picture" src="https://schooloflanguages.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq-300x300.jpg" alt="profile" />

            <p class="profile-name">Person 1</p>
          </div>
        </div>

        <div class="profile-bottom">

          <div class="profile-left">
            <div class="profile-intro profile-box">
              <p class="profile-header">Intro</p>
            </div>
            <div class="profile-photos profile-box">
              <p class="profile-header">Photos</p>
            </div>

          </div>


          <div class="profile-right">

            <div class="profile-posts profile-box">
              <p class="profile-header">Posts</p>
            </div>

          </div>

        </div>
      </div>
    )
  }
}

export default Profile;
