import React from 'react';

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

export default CommentList;
