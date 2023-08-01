import React, { useState } from 'react';

// Render each choice
const Choice = ({ choice, index, questionId, handleChoiceChange }) => (
  <div key={index} className="choice">
    <input 
    type="radio"
      id={`${questionId}${index}`}
      name={questionId}
      value={choice}
      onChange={() => handleChoiceChange(questionId, choice)}
    />
    <label htmlFor={`${questionId}${index}`} style={{ marginLeft: '5px' }}>{choice}</label>
  </div>
);

// Render each question
const Question = ({ question, handleChoiceChange }) => (
  <div key={question.id} className="question">
    <h3>{question.text}</h3>
    {question.choices.map((choice, index) => (
      <Choice
        choice={choice}
        index={index}
        questionId={question.id}
        handleChoiceChange={handleChoiceChange}
      />
    ))}
  </div>
);

// Question component
const Poll = () => {
  const [answers, setAnswers] = useState({});

  const questions = [
    { 
      id: 'q1',
      text: 'Question 1',
      choices: ['A', 'B', 'C', 'D'],
    },
    { 
      id: 'q2',
      text: 'Question 2',
      choices: ['A', 'B', 'C', 'D'],
    },
    { 
      id: 'q3',
      text: 'Question 3',
      choices: ['A', 'B', 'C', 'D'],
    },
    { 
      id: 'q4',
      text: 'Question 4',
      choices: ['A', 'B', 'C', 'D'],
    },
    { 
      id: 'q5',
      text: 'Question 5',
      choices: ['A', 'B', 'C', 'D'],
    },
    { 
      id: 'q6',
      text: 'Question 6',
      choices: ['A', 'B', 'C', 'D'],
    },
  ];

  const handleChoiceChange = (questionId, choice) => {
    setAnswers({
      ...answers,
      [questionId]: choice,
    });
  };

    // Export to txt
  const handleSubmit = () => {
    /* */
  };

  return (
    <div className="poll-container">
      <h2 className="company-name">Company: </h2>
      {questions.map((question) => (
        <Question
          question={question}
          handleChoiceChange={handleChoiceChange}
        />
      ))}
      <div style={{ height: '20px' }} />
      <button onClick={handleSubmit} className="submit-button">Submit</button>
    </div>
  );
};

export default Poll;