import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

import './stylesheets/Feed.css';

class CircleMembers extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    console.log('my friends are',this.props.friends)
    return (
      <div className="feed-members feed-box">
        <p className="feed-header"></p>

        <Link to={`/self/edit/${this.props.currentUser.id}`}>
          <div className="members-box members-box-self">
            <img className="member-pic member-pic-self" src={this.props.currentUser.profile_image} alt="profile" />
            <div className="member-name member-name-self">{this.props.currentUser.name}</div>
          </div>
        </Link>

        {this.props.friends.map((friend) => {
          if(friend.id !== this.props.currentUser.id) {
            return (
              <Link to={`/profile/${friend.id}`}>
                <div className="members-box">
                  <img className="member-pic" src={friend.profile_image} alt="profile" />
                  <div className="member-name">
                    {friend.name}
                  </div>

                </div>
              </Link>
          )
        }
      })}

      </div>
    );
  }
}

export default CircleMembers;
