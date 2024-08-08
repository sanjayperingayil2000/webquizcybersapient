import React from 'react';
import QuizProvider from './context/QuizContext';
import Quiz from './components/Quiz';

function App() {
  return (
    <QuizProvider>
      <div className="App">
        {/* <h1>WEBQUIZ</h1> */}
        <Quiz />
      </div>
    </QuizProvider>
  );
}

export default App;
