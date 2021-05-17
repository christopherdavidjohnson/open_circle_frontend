import React, { Component } from 'react';
import '../stylesheets/Profile.css';

import banner1 from '../images/banner.png';
import banner2 from '../images/banner_winter.png';
import banner3 from '../images/banner_winter2.png';
import banner4 from '../images/banner3.png';

import profile from '../images/profile_placeholder.png';


class Profile extends Component {

  render () {

    return (
      <div class="container">
        <div class="profile-top">

          <div class="name-and-picture">

            <div class="banner-picture-div">
              <img class="banner-picture" src={banner1} alt="banner" />
            </div>

            <img class="profile-picture" src={profile} alt="profile" />

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
