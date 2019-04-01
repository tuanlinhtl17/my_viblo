import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment/Comment';

const CommentList = ({ comments, users }) => {
  return (
    <div>
      { 
        comments.map(comment => {
          var user = users.find(user => user.id === comment.user_id)
          return(
            <Comment 
              key={ comment.id }
              comment={ comment }
              user={ user }
            />
          )
        })
      }
    </div>
  )
}

CommentList.defaultProps = { 
  users: [],
  comments: [],
}

CommentList.propTypes = { 
  users: PropTypes.array.isRequired,
  comments: PropTypes.array.isRequired,
}

export default CommentList;
