import React, { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';
import Rules from './Rules';

const Welcome = () => {
  const { setShowWelcome } = useContext(QuizContext);

  return (
    <div className="container">
      <h2>Welcome to WEBQUIZ</h2>
      <p>If you are ready, let's start the session by clicking the start button below.</p>
      <Rules />
      <button onClick={() => setShowWelcome(false)}>Start</button>
    </div>
  );
};

export default Welcome;
