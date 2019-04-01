import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoadingBar from 'react-redux-loading-bar';
import PropTypes from 'prop-types';

import TopNav from './TopNav/TopNav';
import HomePage from './HomePage';
import QuestionPage from './QuestionPage';
import ShowPostPage from './ShowPostPage';
import ShowQuestionPage from './ShowQuestionPage';

import { setSearchField } from '../actions/setSearchField';

import { requestPostsUsers } from '../actions/requestPostsUsers';
import { destroyPost } from '../actions/destroyPosts';

import { questions } from '../databases';

const mapStateToProps = state => {
  return {
    posts_pending: state.requestPostsUsers.posts_pending,
    searchField: state.searchData.searchField,
    users: state.requestPostsUsers.users,
    posts: state.requestPostsUsers.posts,
    questions: questions,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),

    onRequestPostsUsers: () => dispatch(requestPostsUsers()),
    onDestroyPost: event => dispatch(destroyPost(event.target.value)),
  };
}

class App extends Component {

  componentDidMount() {
    this.props.onRequestPostsUsers();
  }
  
  render() {
    const { 
      posts_pending,
      comments_pending, 
      searchField, 
      posts, 
      users, 
      questions, 
      onSearchChange } = this.props;
    const filteredPosts = posts.filter(post => {
      return post.title.toLowerCase().includes(searchField.toLowerCase());
    });
    const filteredQuestions = questions.filter(question => {
      return question.title.toLowerCase().includes(searchField.toLowerCase());
    });

    if(posts_pending || comments_pending || users.length === 0 || posts.length === 0) {
      return (
        <div>
          <LoadingBar />
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <Router>
          <div>
            <LoadingBar />
            <TopNav onSearchChange={ onSearchChange } user={ users[0] } />
  
            <Route 
              path="/" 
              exact 
              render={(props) => (
                <HomePage 
                {...props} 
                users={ users }
                posts={ filteredPosts } 
                questions={ filteredQuestions } />
              )} 
            />
  
            <Route 
              path="/posts/:id" 
              exact 
              render={(props) => (
                <ShowPostPage 
                {...props} 
                users={ users }
                posts={ posts } 
                questions={ filteredQuestions }
                onDestroyPost={ this.props.onDestroyPost } />
              )} 
            />
  
  
  
            <Route 
              path="/questions" 
              exact 
              render={(props) => (
                <QuestionPage 
                {...props} 
                users={ users }
                posts={ filteredPosts } 
                questions={ filteredQuestions } />
              )} 
            />
  
            <Route 
              path="/questions/:id" 
              exact 
              render={(props) => (
                <ShowQuestionPage 
                {...props} 
                users={ users }
                posts={ filteredPosts } 
                questions={ questions } />
              )} 
            />
          </div>
        </Router>
      );
    }
  }
}

App.defaultProps = {
  posts_pending: false,
  comments_pending: false,
  searchField: '',
  users: [],
  posts: [],
  questions: [],
}

App.propTypes = {
  posts_pending: PropTypes.bool,
  comments_pending: PropTypes.bool,
  searchField: PropTypes.string,
  users: PropTypes.array,
  posts: PropTypes.array,
  questions: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
