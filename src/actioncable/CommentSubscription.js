const CommentChannel = {
  subscribe(received) {
    this.unsubscribe();
    window.App.CommentSubscription = window.App.cable.subscriptions.create({
      channel: "CommentChannel",
    }, {
      received: received,
      requestComments: function(postID) {
        this.perform('request_comment', {
          post_id: postID
        });        
      },
      create: function(postID, commentContent) {
        console.log(commentContent);
        this.perform('create_comment', {
          post_id: postID,
          content: commentContent
        });
      }
    });
  },

  unsubscribe() {
    if (window.App.CommentSubscription === undefined) {
      return false;
    }

    window.App.cable.subscriptions.remove(window.App.CommentSubscription);
    delete window.App.CommentSubscription
  }
}

export default CommentChannel;
