import React, { useState, useReducer} from 'react';
import Question from "./Question";
import questions from "./questions";
import "./App.css";

const questionReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
    return{
      value: action.val,
      isValid: action.val.length !== 0
    }
  }
  return {
    value: [],
    isValid: false
  }
};

const App = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [personalQuestionState, dispatchPersonalQuestion] = useReducer(questionReducer, {
    value: [],
    isValid: false
  });
  const [familyQuestionState, dispatchFamilyQuestion] = useReducer(questionReducer, {
    value: [],
    isValid: false
  });
  const [psychQuestionState, dispatchPsychQuestion] = useReducer(questionReducer, {
    value: [],
    isValid: false
  });

  const { isValid: personalIsValid } = personalQuestionState;
  const { isValid: familyIsValid } = familyQuestionState;
  const { isValid: psychIsValid } = psychQuestionState; 

  const responseHandler = (event) => {
    if(event.target.name === 'family_history'){
      if(familyQuestionState.value.indexOf(event.target.value) === -1){
        familyQuestionState.value.push(event.target.value);
        dispatchFamilyQuestion({
          type: 'USER_INPUT',
          val: [...familyQuestionState.value]
        });
      }
      else{
        dispatchFamilyQuestion({
          type: 'USER_INPUT',
          val: familyQuestionState.value.splice(familyQuestionState.value.indexOf(event.target.value), 1)
        });
      }
    }
    if (event.target.name === 'personal_history') {
      if (personalQuestionState.value.indexOf(event.target.value) === -1) {
        personalQuestionState.value.push(event.target.value);
        dispatchPersonalQuestion({
          type: 'USER_INPUT',
          val: [...personalQuestionState.value]
        });
      }
      else {
        dispatchPersonalQuestion({
          type: 'USER_INPUT',
          val: personalQuestionState.value.splice(personalQuestionState.value.indexOf(event.target.value), 1)
        });
      }
    }
    if (event.target.name === 'psychological_history') {
      if (psychQuestionState.value.indexOf(event.target.value) === -1) {
        psychQuestionState.value.push(event.target.value);
        dispatchPsychQuestion({
          type: 'USER_INPUT',
          val: [...psychQuestionState.value]
        });
      }
      else {
        dispatchPsychQuestion({
          type: 'USER_INPUT',
          val: psychQuestionState.value.splice(psychQuestionState.value.indexOf(event.target.value), 1)
        });
      }
    }
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if(familyIsValid && psychIsValid && personalIsValid){
      setHasSubmitted(true);
      setFormIsValid(true);
    }
    else{
      setHasSubmitted(true);
    }
  }
  
  return(
    <main className="App">
      <h1 className="App-title">Risk Assessment</h1>
      {(formIsValid) && <h3 className="success">Thank you!</h3>}
      {(!formIsValid && hasSubmitted) && <h3 className="invalid">You must select at least one value for each question</h3>}
      <form onSubmit={submitHandler}>
        {questions.map((question) => {
          return <Question key={question.id} question={question} responseHandler={responseHandler}/>
        })}
        <div>
          <button type="submit">Next</button>
        </div>
      </form>
    </main>
  )
};

export default App;
