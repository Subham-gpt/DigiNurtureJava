import React from 'react';
import PostModel from './Post';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    };
  }


  loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        const postObjects = data.map(
          (item) => new PostModel(item.id, item.title, item.body)
        );
        this.setState({ posts: postObjects });
      })
      .catch((error) => {
        this.setState({ error });
      });
  }


  componentDidMount() {
    this.loadPosts();
  }


  componentDidCatch(error, info) {
    alert("An error occurred while rendering posts: " + error.toString());
  }


  render() {
    const { posts } = this.state;

    return (
      <div>
        <h2>All Blog Posts</h2>
        {posts.map((post) => (
          <div key={post.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Post;
