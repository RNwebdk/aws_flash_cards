import React from 'react';
import QuizType from './QuizType';

const QuizBar = (props) => {
  return (
    <div className='quiz-bar'>
      <h1>Choose your study type</h1>
      <ul className='nav nav-pills nav-fill'>
        <QuizType
          icon='fas fa-dice fa-4x'
          quizType='Random'
          userChoice={props.userChoice}
        />
        <QuizType
          icon='fas fa-file-alt fa-4x'
          quizType='Regular'
          userChoice={props.userChoice}
        />
        <QuizType
          icon='fas fa-dumbbell fa-4x'
          quizType='Weighted'
          userChoice={props.userChoice}
        />
        <QuizType
          icon='fas fa-font fa-4x'
          quizType='Multi'
          userChoice={props.userChoice}
        />
      </ul>
    </div>
  );
};

export default QuizBar;
