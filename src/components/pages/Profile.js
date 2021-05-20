import React, { Component } from 'react';
import Post from '../Post.js'

import axios from "axios";

import '../stylesheets/Profile.css';

import banner1 from '../images/banner.png';
import banner2 from '../images/banner_winter.png';
import banner3 from '../images/banner_winter2.png';
import banner4 from '../images/banner3.png';

import profile from '../images/profile_placeholder.png';

const SERVER_URL_POSTS = 'https://open-circle-server.herokuapp.com/posts';
const SERVER_URL_USERS = 'https://open-circle-server.herokuapp.com/users/';

class Profile extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      bio: '',
      profile_image: '',
      photos: [],
      posts: [],
    };
  }

  componentDidMount() {
    const fetchPosts = () => {
      axios.get(SERVER_URL_POSTS).then((results) => {

        const postArray = [];
        results.data.forEach((post)=>{
          if (post.user.name === this.state.name){
            postArray.push(post);
          }
        })
        this.setState({ posts: postArray });
        setTimeout(fetchPosts, 30000);
      });
    };
  fetchPosts();


  const fetchProfileId = () => {
    console.log(this.props.match.params.id)
    const url=`${SERVER_URL_USERS}${this.props.match.params.id}`;
    console.log(url);
    axios.get(url).then((results) => {
      this.setState({
        name: results.data.user.name,
        bio: results.data.user.bio,
        profile_image: results.data.user.profile_image
       });
    })
  }
  fetchProfileId();
}

  displayImages = () => {
    const imageArray = []
    {this.state.posts.forEach((post)=>{
      post.image.forEach((image)=>{
        imageArray.push(image);
      })
    })}
    this.setState({photos: imageArray});
  }

  render () {
    console.log("name is", this.state.name);
    return (
      <div className="container">
        <div className="profile-top">

          <div className="name-and-picture">

            <div className="banner-picture-div">
              <img className="banner-picture" src={banner1} alt="banner" />
            </div>

            <img className="profile-picture" src={this.state.profile_image} alt="profile" />

            <p className="profile-name">{this.state.name}</p>
          </div>
        </div>

        <div className="profile-bottom">

          <div className="profile-left">
            <div className="profile-intro profile-box">
              <p className="profile-header">Intro</p>
              <p className="bio">{this.state.bio}</p>
            </div>
            <div className="profile-photos profile-box">
              <p className="profile-header">Photos</p>

            </div>

          </div>


          <div className="profile-right">

            <div className="profile-posts profile-box">
              <p className="profile-header">Posts</p>
              {this.state.posts.map((post)=>(
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
