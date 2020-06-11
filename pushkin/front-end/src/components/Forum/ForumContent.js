import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router';
// import s from './styles.css';
// import { Panel } from 'react-bootstrap';

class ForumContent extends React.Component {
  showAllPosts = () => {
    return this.props.posts.map(post => {
      return (
        <div key={post.id}>
          <div>
            {/* <Link to={`/forum/posts/${post.id}`}> */}
            <h3>{post.post_subject}</h3>
            {/* </Link> */}
            {post.quiz && <div>{post.quiz}</div>}
            {!post.quiz && <div style={{ background: 'tomato' }}>general</div>}
          </div>
          <hr />
        </div>
      );
    });
  };
  render() {
    return <div>{this.showAllPosts()}</div>;
  }
}
ForumContent.propTypes = {
  posts: PropTypes.array
};

export default ForumContent;
