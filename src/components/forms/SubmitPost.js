import React, { Component } from "react";
import axios from "axios";

const SERVER_URL = "https://open-circle-backend.herokuapp.com/posts";

class SubmitPosts extends Component {
  constructor() {
    super();
    this.state = {
      content: "",
    };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChangeContent = this._handleChangeContent.bind(this);
  }

  _handleSubmit(event){
    event.preventDefault();
    axios
      .post(SERVER_URL, {
        post: {
          content: this.state.content,
          user_id: this.props.user.id,
          circle_id: this.props.circleparam
        },
      })

    this.setState({
      content: "",
    });
  }

  _handleChangeContent(event) {
    this.setState({ content: event.target.value });
  }


  render() {

    return (
      <form onSubmit={this._handleSubmit}>
        <p>
          <input
            className ="inputitemfeed"
            type="text"
            onChange={this._handleChangeContent}
            value={this.state.content}
            placeholder="What's on your mind?"
          />
        </p>

        <input className ="submititemfeed" type="submit" value="" onSubmit={this._handleSubmit} />

      </form>
    );
  }
}

export default SubmitPosts;
