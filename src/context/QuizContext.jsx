import React, { createContext, useState } from 'react';

export const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Mars"
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["Mark Twain", "Charles Dickens", "William Shakespeare", "Jane Austen"],
      answer: "William Shakespeare"
    },
    {
      question: "What is the smallest prime number?",
      options: ["0", "1", "2", "3"],
      answer: "2"
    }
  ];

  return (
    <QuizContext.Provider value={{
      score,
      setScore,
      currentQuestion,
      setCurrentQuestion,
      showResult,
      setShowResult,
      showWelcome,
      setShowWelcome,
      selectedAnswer,
      setSelectedAnswer,
      questions
    }}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
