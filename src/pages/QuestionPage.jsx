import React, { useState, useEffect } from "react";
import "./questions.css";

function Question({ current, questions, selectedOption, setSelectedOption, companyList}) {
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
            className={selectedOption === option ? "selected" : ""}
            onClick={() => setSelectedOption(option)}
          >
            {option.text}
          </li>
        ))}
      </ul>
    </>
  );
}

function Poll() {
  const [showResults, endPoll] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [companyList, setCompanyList] = useState([]);

  useEffect(() => {
    fetch('/questions.json')
      .then(response => response.json())
      .then(data => setQuestions(data.sort(() => 0.5 - Math.random())))
      .catch(error => console.error("Error fetching:", error));

      fetch('/companyList.json')
      .then(response => response.json())
      .then(data => setCompanyList(data.sort(() => 0.5 - Math.random())))
      .catch(error => console.error("Error fetching", error));
  }, []);

  const submitAnswer = () => {
    if (!selectedOption) return;
    if (currentQuestion + 1 < 10) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedOption(null);
    } else {
      endPoll(true);
    }
  };

  return (
    <div className="Poll">
      {showResults ? (
        <h2>Done with all the questions today!</h2>
      ) : (
        <>
          <Question 
            current={currentQuestion} 
            questions={questions} 
            selectedOption={selectedOption} 
            setSelectedOption={setSelectedOption} 
            companyList={companyList}
          />
          <button className='submit' onClick={submitAnswer} style={{margin: '10px'}}>Submit</button>
        </>
      )}
    </div>
  );
}

export default Poll;
