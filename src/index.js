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
  constructor() {
    super();
    this.state = {
      posts: ["Post one", "Post two", "post three"]
    };
  }
  handleAddPost(e) {
    e.preventDefault;
    alert("Post added");
  }
  render() {
    return (
      <div className="container">
        <AddPost AddPost={this.handleAddPost} />
        <Post posts={this.state.posts} />
      </div>
    );
  }
}

class AddPost extends Feed {
  render() {
    return (
      <form onSubmit={this.handleAddPost}>
        <div className="row">
          <div className="col-sm-8">
            <input
              className="form-control"
              type="text"
              name="userPost"
              placeholder="What's up today?"
            />
          </div>
          <div class="col-sm-4">
            <button className="btn btn-primary">Post</button>
          </div>
        </div>
      </form>
    );
  }
}

class Post extends React.Component {
  render() {
    return (
      <div>
        <div class="card my-2">
          <div class="card-body" />
          {this.props.posts.map(posts => <li>{posts}</li>)}
        </div>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
