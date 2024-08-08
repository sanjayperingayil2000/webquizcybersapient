import React, { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';
import Question from './Question';
import Result from './Result';
import Welcome from './Welcome';

const Quiz = () => {
  const { showResult, showWelcome } = useContext(QuizContext);

  return (
    <div>
      {showWelcome ? <Welcome /> : showResult ? <Result /> : <Question />}
    </div>
  );
};

export default Quiz;
