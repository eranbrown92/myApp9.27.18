import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Feed />
      </div>
    );
  }
}

function Header() {
  return (
    <div className="Header">
      <h1>MyApp</h1>
    </div>
  );
}

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  render() {
    return (
      <div className="container">
        <AddPost />
        <Post posts={this.state.posts} />
      </div>
    );
  }
}

class AddPost extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-8">
          <input
            className="form-control"
            type="text"
            name="post"
            placeholder="What's up today?"
          />
        </div>
        <div class="col-sm-4">
          <button className="btn btn-primary" onClick={this.handleAdd}>
            Post
          </button>
        </div>
      </div>
    );
  }
}

class Post extends React.Component {
  render() {
    return (
      <div>
        <div class="card my-2">
          <div class="card-body" />
          My first Post!
        </div>
        <div class="card my-2">
          <div class="card-body" />
          My Second Post!
        </div>
        <div class="card my-2">
          <div class="card-body" />
          My Third Post!
        </div>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
