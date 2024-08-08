import React, { useContext, useEffect, useState } from 'react';
import { QuizContext } from '../context/QuizContext';

const Question = () => {
  const {
    questions,
    currentQuestion,
    setCurrentQuestion,
    score,
    setScore,
    setShowResult,
    selectedAnswer,
    setSelectedAnswer
  } = useContext(QuizContext);

  const [timeLeft, setTimeLeft] = useState(5);
  const [showLoader, setShowLoader] = useState(false);
  const [loaderText, setLoaderText] = useState('.');
  const [correctAnswer, setCorrectAnswer] = useState(null);

  useEffect(() => {
    if (!selectedAnswer && timeLeft === 0) {
      handleTimeout();
    }
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  useEffect(() => {
    if (showLoader) {
      const loaderInterval = setInterval(() => {
        setLoaderText(prev => (prev.length === 3 ? '.' : prev + '.'));
      }, 500);
      return () => clearInterval(loaderInterval);
    }
  }, [showLoader]);

  const handleOptionClick = (option) => {
    setSelectedAnswer(option);
    setShowLoader(true);
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setTimeout(() => {
      setShowLoader(false);
      highlightAnswer();
    }, 5000);
  };

  const handleTimeout = () => {
    setSelectedAnswer(null);
    setShowLoader(true);
    setCorrectAnswer(questions[currentQuestion].answer);
    setTimeout(() => {
      setShowLoader(false);
      highlightAnswer();
    }, 5000);
  };

  const highlightAnswer = () => {
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setCorrectAnswer(null);
        setTimeLeft(5);
      } else {
        setShowResult(true);
      }
    }, 2000);
  };

  return (
    <div className="container">
      <div className="score">Score: {score} / {questions.length}</div>
      <h2>{questions[currentQuestion].question}</h2>
      <ul className="options">
        {questions[currentQuestion].options.map((option, index) => (
          <li
            key={index}
            className={
              !showLoader && !selectedAnswer && correctAnswer
                ? option === correctAnswer
                  ? 'correct'
                  : ''
                : !showLoader && selectedAnswer
                ? option === questions[currentQuestion].answer
                  ? 'correct'
                  : option === selectedAnswer
                  ? 'incorrect'
                  : ''
                : ''
            }
            onClick={() => !selectedAnswer && !showLoader && handleOptionClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
      {showLoader ? (
        <div className="loader">
          <div className="loader-text">The correct answer is   </div>
          <div className="loader-animation">{loaderText}</div>
        </div>
      ) : (
        <div className="timer">Time left: {timeLeft} seconds</div>
      )}
    </div>
  );
};

export default Question;
