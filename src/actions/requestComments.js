export const requestComments = (postID) => {
  window.App.CommentSubscription.requestComments(postID);
};

export const receiveComments = (message) => (dispatch) => {
  if(message) {
    dispatch({ type: message.action_type, payload: message.payload });
  }
}

export const createComment = (postID, commentContent) => {
  window.App.CommentSubscription.create(postID, commentContent)
}
