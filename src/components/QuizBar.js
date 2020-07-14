import React from 'react';
import QuizType from './QuizType';

const QuizBar = (props) => {
  const quizArray = [
    {
      icon: 'fas fa-dice fa-4x',
      type: 'Random',
    },
    {
      icon: 'fas fa-file-alt fa-4x',
      type: 'Regular',
    },
    {
      icon: 'fas fa-dumbbell fa-4x',
      type: 'Weighted',
    },
    {
      icon: 'fas fa-font fa-4x',
      type: 'Multi',
    },
  ];

  return (
    <div className='quiz-bar'>
      <h1>Choose your study type</h1>
      <ul className='nav nav-pills nav-fill'>
        {quizArray.map((qt, i) => (
          <QuizType
            key={i}
            icon={qt.icon}
            quizType={qt.type}
            userChoice={props.userChoice}
          />
        ))}
      </ul>
    </div>
  );
};

export default QuizBar;
