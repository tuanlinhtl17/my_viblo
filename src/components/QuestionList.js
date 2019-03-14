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
              author={ question.author }
              title={ question.title }
              content={ question.content }
              numberAnswers={ question.numberAnswers }
            />
          )
        })
      }
    </div>
  )
}

export default QuestionList;
