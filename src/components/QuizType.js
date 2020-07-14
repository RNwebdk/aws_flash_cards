import React from 'react';

const QuizType = (props) => {
  return (
    <li className='col-sm-3 text-center'>
      <div
        className='nav-card'
        onClick={() => props.userChoice(props.quizType)}
      >
        <i className={props.icon}></i>
        <span> {props.quizType}</span>
      </div>
    </li>
  );
};

export default QuizType;
