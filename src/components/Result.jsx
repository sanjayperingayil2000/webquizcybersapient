import React, { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';

const Result = () => {
  const { score, setCurrentQuestion, setScore, setShowResult, setShowWelcome, setSelectedAnswer } = useContext(QuizContext);

  const handlePlayAgain = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResult(false);
    setShowWelcome(true);
    setSelectedAnswer(null);
  };

  return (
    <div className="container">
      <h2>Your Score: {score} / 4</h2>
      <button onClick={handlePlayAgain}>Play Again</button>
    </div>
  );
};

export default Result;
