import React from 'react';
import QuizType from './QuizType';

const QuizBar = (props) => {
  return (
    <div className='quiz-bar'>
      <h1>Choose your study type</h1>
      <ul className='nav nav-pills nav-fill'>
        <li className='col-sm-3 text-center'>
          <div className='nav-card'>
            <QuizType icon='fas fa-dice fa-4x' />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default QuizBar;
