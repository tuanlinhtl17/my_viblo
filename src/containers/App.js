import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import LoadingBar from 'react-redux-loading-bar';

import TopNav from './TopNav/TopNav';
import HomePage from './HomePage';
import QuestionPage from './QuestionPage';
import { setSearchField } from '../actions/setSearchField';

import { posts, questions } from '../databases';

const mapStateToProps = state => {
  return {
    searchField: state.searchData.searchField,
    posts: posts,
    questions: questions,
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
          {/* <LoadingBar /> */}
          <TopNav onSearchChange={ onSearchChange } />

          <Route 
            path="/" 
            exact 
            render={(props) => (
              <HomePage 
              {...props} 
              posts={ filteredPosts } 
              questions={ filteredQuestions } />
            )} 
          />

          <Route 
            path="/questions" 
            exact 
            render={(props) => (
              <QuestionPage 
              {...props} 
              onSearchChange={ onSearchChange } 
              posts={ filteredPosts } 
              questions={ filteredQuestions } />
            )} 
          />
        </div>
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
