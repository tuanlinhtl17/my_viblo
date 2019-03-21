import React from 'react';

import Comment from './Comment/Comment';

const CommentList = ({ comments }) => {
  return (
    <div>
      { 
        comments.map(comment => {
          return(
            <Comment 
              key={ comment.id }
              comment={ comment }
            />
          )
        })
      }
    </div>
  )
}

export default CommentList;
