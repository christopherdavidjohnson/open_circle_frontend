import React, { Component } from 'react';
import Post from '../Post.js'

import axios from "axios";

import '../stylesheets/Profile.css';

import banner1 from '../images/banner.png';
import banner2 from '../images/banner_winter.png';
import banner3 from '../images/banner_winter2.png';
import banner4 from '../images/banner3.png';

import profile from '../images/profile_placeholder.png';

const SERVER_URL = 'https://open-circle-server.herokuapp.com/posts';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.props.user = {
      name: props.user.name,
      bio: props.user.bio,
      profile_image: props.user.profile_image,
      photos: [],
      posts: []
    };
  }

  componentDidMount() {
    const fetchPosts = () => {
      axios.get(SERVER_URL).then((results) => {

        const postArray = [];
        results.data.forEach((post)=>{
          if (post.user.name === this.props.user.name){
            postArray.push(post);
          }
        })
        this.setState({ posts: postArray });
        setTimeout(fetchPosts, 4000);
      });
    };
  fetchPosts();
  }

  displayImages = () => {
    const imageArray = []
    {this.props.user.posts.forEach((post)=>{
      post.image.forEach((image)=>{
        imageArray.push(image);
      })
    })}
    this.setState({photos: imageArray});
  }

  render () {



    return (
      <div className="container">
        <div className="profile-top">

          <div className="name-and-picture">

            <div className="banner-picture-div">
              <img className="banner-picture" src={banner1} alt="banner" />
            </div>

            <img className="profile-picture" src={this.props.user.profile_image} alt="profile" />

            <p className="profile-name">{this.props.user.name}</p>
          </div>
        </div>

        <div className="profile-bottom">

          <div className="profile-left">
            <div className="profile-intro profile-box">
              <p className="profile-header">Intro</p>
              <p className="bio">{this.props.user.bio}</p>
            </div>
            <div className="profile-photos profile-box">
              <p className="profile-header">Photos</p>

            </div>

          </div>


          <div className="profile-right">

            <div className="profile-posts profile-box">
              <p className="profile-header">Posts</p>
              {this.props.user.posts.map((post)=>(
                <Post data={post}/>
              ))}

            </div>

          </div>

        </div>
      </div>
    )
  }
}

export default Profile;
