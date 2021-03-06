import React from 'react';
import Question from "./Question";
import {
  FAMILY_SUBSTANCES,
  PERSONAL_SUBSTANCES,
  DISORDERS } from "./QuestionDefinitions";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Risk Assessment
        </header>
        <form>
          <Question
            question="Do you have a family history of substance abuse?"
            choices={FAMILY_SUBSTANCES}
          />
          <Question
            question="Do you have a personal history of substance abuse?"
            choices={PERSONAL_SUBSTANCES}
          />
          <Question
            question="Have you been diagnosed with any of the following Psychological diseases?"
            choices={DISORDERS}
          />
          <p>
            <button>Next</button>
          </p>
        </form>
      </div>
    );
  }
}

export default App;
