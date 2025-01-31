import React, { useState, useEffect } from "react";
import "./Quiz.css";
import { quizData } from "../../quizData.js";
import { Link, useNavigate } from "react-router-dom";

function Quiz() {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [username, setUsername] = useState("");
  const [quizStarted, setQuizStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(1500);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const navigate = useNavigate();  

  useEffect(() => {
    
    const storedUsername = localStorage.getItem("username");
    if (!storedUsername) {
      
      navigate("/signin");
    } else {
      setUsername(storedUsername); 
    }

    let timer;
    if (quizStarted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleSubmit();
    }
    return () => clearInterval(timer);
  }, [quizStarted, timeLeft, navigate]);

  const handleStart = () => {
    if (!selectedTopic) {
      alert("Please select a topic.");
      return;
    }
    setQuestions(quizData[selectedTopic].slice(0, 20));
    setQuizStarted(true);
  };

  const handleAnswerChange = (selectedOption) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestion]: selectedOption,
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    let finalScore = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.answer) {
        finalScore += 1;
      }
    });
    setScore(finalScore);
    setShowScore(true);
  };

  return (
    <div className="quiz-container">
      {!quizStarted ? (
        <div className="start-screen">
          <h1>Get Your Certificate by Giving the Quiz</h1>
          <h2>Select a Quiz Topic</h2>
          <div className="topic-buttons">
            {Object.keys(quizData).map((topic) => (
              <button
                key={topic}
                className={selectedTopic === topic ? "selected" : ""}
                onClick={() => setSelectedTopic(topic)}
              >
                {topic}
              </button>
            ))}
          </div>
          <button onClick={handleStart}>Start Quiz</button>
        </div>
      ) : showScore ? (
        <div className="score-screen">
          <h2>🎉 Congratulations, {username}! 🎉</h2>
          <p className="animated-score">Your Score: {score} / 20</p>
          {score >= 1 && (
            <button>
              <Link to={`/certificate?name=${username}&topic=${selectedTopic}`}>
                View Certificate
              </Link>
            </button>
          )}
        </div>
      ) : (
        <div className="quiz-section">
          <h2>{selectedTopic} Quiz</h2>
          <p className="timer">⏳ Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60}s</p>
          <div className="question-box animate-fade-in">
            <h3>{currentQuestion + 1}. {questions[currentQuestion].question}</h3>
            {questions[currentQuestion].options.map((option, i) => (
              <label key={i} className={answers[currentQuestion] === option ? "selected" : ""}>
                <input
                  type="radio"
                  name={`question-${currentQuestion}`}
                  value={option}
                  checked={answers[currentQuestion] === option}
                  onChange={() => handleAnswerChange(option)}
                />
                {option}
              </label>
            ))}
          </div>
          <button className="next-btn animate-bounce" onClick={handleNext}>
            {currentQuestion === questions.length - 1 ? "Submit" : "Next ➡"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
