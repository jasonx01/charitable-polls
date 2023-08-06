import React, { useState, useEffect } from "react";
import "./questions.css";

/**
 * Question Component
 * Displays the current question and its associated company.
 */
function Question({ current, questions, selectedChoice, setSelectedChoice, companyList }) {
  const question = questions[current];
  const company = companyList[current];

  return (
    <>
      <h2>Question: {current + 1} of 10</h2>
      <h3 className="question-text">{question?.text}</h3>
      <h2>Company: {company?.name}</h2>
      <ul>
        {question?.options.map(option => (
          <li
            key={option.id}
            className={selectedChoice === option ? "selected" : ""}
            onClick={() => setSelectedChoice(option)}
          >
            {option.text}
          </li>
        ))}
      </ul>
    </>
  );
}

/**
 * Poll Component
 * Manages the state and flow of the poll questions.
 */
function Poll() {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [companyList, setCompanyList] = useState([]);

  useEffect(() => {
    // Fetch the questions and shuffle them
    fetch('/questions.json')
      .then(response => response.json())
      .then(data => setQuestions(data.sort(() => 0.5 - Math.random())))
      .catch(error => console.error("Error fetching questions:", error));

    // Fetch the company list and shuffle it
    fetch('/companyList.json')
      .then(response => response.json())
      .then(data => setCompanyList(data.sort(() => 0.5 - Math.random())))
      .catch(error => console.error("Error fetching companies:", error));
  }, []);

  const handleAnswerSubmission = () => {
    if (!selectedChoice) return;
    if (currentQuestion + 1 < 10) {
      setCurrentQuestion(prev => prev + 1);
      setselectedChoice(null);
    } else {
      setShowResults(true);
    }
  };

  return (
    <div className="Poll">
      {showResults 
        ? <h2>Done with all the questions today!</h2>
        : (
            <>
              <Question 
                current={currentQuestion} 
                questions={questions} 
                selectedChoice={selectedChoice} 
                setSelectedChoice={setSelectedChoice} 
                companyList={companyList}
              />
              <button 
                className='submit' 
                onClick={handleAnswerSubmission} 
                style={{margin: '10px'}}
              >
                Submit
              </button>
            </>
          )
      }
    </div>
  );
}

export default Poll;
