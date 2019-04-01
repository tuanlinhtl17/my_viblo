import React from 'react';
import PropTypes from 'prop-types';

import Question from './Question/Question';

const QuestionList = ({ questions }) => {
  return (
    <div>
      { 
        questions.map(question => {
          return(
            <Question 
              key={ question.id }
              question={ question }
            />
          )
        })
      }
    </div>
  )
}

QuestionList.defaultProps = {
  users: [],
  questions: [],
}

QuestionList.propTypes = {
  users: PropTypes.array.isRequired,
  questions: PropTypes.array.isRequired,
};

export default QuestionList;
