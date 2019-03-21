import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoadingBar from 'react-redux-loading-bar';

import TopNav from './TopNav/TopNav';
import HomePage from './HomePage';
import QuestionPage from './QuestionPage';
import ShowPostPage from './ShowPostPage';
import ShowQuestionPage from './ShowQuestionPage';

import { setSearchField } from '../actions/setSearchField';

import { users, posts, questions, comments } from '../databases';

const mapStateToProps = state => {
  return {
    searchField: state.searchData.searchField,
    users: users,
    posts: posts,
    questions: questions,
    comments: comments,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value))
  };
}

class App extends Component {
  
  render() {
    const { searchField, posts, questions, onSearchChange } = this.props;
    const filteredPosts = posts.filter(post => {
      return post.title.toLowerCase().includes(searchField.toLowerCase());
    });
    const filteredQuestions = questions.filter(question => {
      return question.title.toLowerCase().includes(searchField.toLowerCase());
    });

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
              comments={ comments } />
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
              questions={ questions }
              comments={ comments } />
            )} 
          />
        </div>
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
