import React, { Component } from "react";
import axios from "axios";

const SERVER_URL = "https://open-circle-server.herokuapp.com/posts";

class SubmitPosts extends Component {
  constructor() {
    super();
    this.state = {
      content: "",
    };
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  componentDidMount() {
    const fetchPosts = () => {
      axios.get(SERVER_URL).then((results) => {

        this.setState({ posts: results.data });
        setTimeout(fetchPosts, 4000);
      });
    };

  this._handleChangeContent = this._handleChangeContent.bind(this);

  fetchPosts();
  }


  _handleSubmit(event) {
    event.preventDefault();
    axios
      .post(SERVER_URL, {
        posts: {
          content: this.state.content
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
            type="text"
            onChange={this._handleChangeContent}
            value={this.state.content}
            placeholder="What's on your mind?"
          />
        </p>

        <input type="submit" value="Posts" onSubmit={this._handleSubmit} />

      </form>
    );
  }
}

export default SubmitPosts;
