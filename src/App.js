import React from 'react';

import TriviaForm from './components/TriviaForm';
import TriviaQuestions from './components/TriviaQuestions'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Trivia Questions!</h1>
      <TriviaForm />
      <TriviaQuestions />
    </div>
  );
}

export default App;
