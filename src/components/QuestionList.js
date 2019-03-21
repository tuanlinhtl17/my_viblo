import React from 'react';

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

export default QuestionList;
