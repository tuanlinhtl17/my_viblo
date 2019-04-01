import React from 'react';
import PropTypes from 'prop-types';

import Post from './Post/Post';

const PostList = ({ users, posts }) => {
  return (
    <div>
      { 
        posts.map(post => {
          var user = users.find(user => user.id === post.user_id)
          return(
            <Post 
              key={ post.id }
              post={ post }
              user={ user }
            />
          )
        })
      }
    </div>
  )
}

PostList.defaultProps = {
  users: [],
  posts: [],
}

PostList.propTypes = {
  users: PropTypes.array.isRequired,
  posts: PropTypes.array.isRequired,
};

export default PostList;
