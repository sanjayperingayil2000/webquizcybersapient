import React from 'react';

const Rules = () => {
  return (
    <div className="rules">
      <h3>Rules of the Quiz</h3>
      <ul>
        <li>Each question has a time limit of 5 seconds.</li>
        <li>If you click an option, the quiz will move to the next question.</li>
        <li>If you don't select an answer within the time limit, the quiz will automatically move to the next question.</li>
        <li>The correct answer will be highlighted in green, and if your answer is wrong, it will be highlighted in red.</li>
      </ul>
    </div>
  );
};

export default Rules;
