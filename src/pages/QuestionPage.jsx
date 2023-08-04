import React, { useState, useEffect } from "react";
import "./questions.css";

function Poll() {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    fetch('/questions.json')
      .then(response => response.json())
      .then(data => setQuestions(data))
      .catch((error) => console.error("Error fetching questions:", error));
  }, []);

  const submitAnswer = () => {
    if (selectedOption) {
      setResponses([...responses, selectedOption.text]);
      if (selectedOption.isCorrect) {
        setScore(score + 1);
      }
      if (currentQuestion + 1 < 10) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setShowResults(true);
      }
    }
  };

  /*
  const downloadResponses = () => {
    const element = document.createElement("a");
    const file = new Blob([responses.join("\n")], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "responses.txt";
    document.body.appendChild(element);
    element.click();
  };
  */

  return (
    <div className="Poll">
      {showResults ? (
        <div style={{ textAlign: 'center' }}>
          <h2>Done with all the questions today!</h2>
        </div>
      ) : (
        <>
          <h2>
            Question: {currentQuestion + 1} out of {10}
          </h2>
          <h3 className="question-text">{questions[currentQuestion]?.text}</h3>
          <p>
            <h2>Company: {questions[currentQuestion]?.company}
            </h2>
            </p>  
          <ul>
            {questions[currentQuestion]?.options.map((option) => {
              return (
                <li
                  key={option.id}
                  className={selectedOption === option ? "selected" : ""}
                  onClick={() => setSelectedOption(option)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
          <button className='submit' onClick={submitAnswer} style={{margin: '10px'}}>Submit</button>
          </>
      )}
    </div>
  );
};

export default Poll;
