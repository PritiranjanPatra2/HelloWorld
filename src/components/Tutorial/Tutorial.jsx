import React, { useState } from "react";
import "./Tutorial.css";
import { data } from "../../data.js";
import { Link } from "react-router";

function Tutorial() {
  const [selectedCategory, setSelectedCategory] = useState("HTML");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copySuccess, setCopySuccess] = useState(false);

  const topics = data[selectedCategory];

  const handleNext = () => {
    if (currentIndex < topics.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(topics[currentIndex].example).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000); 
    });
  };

  return (
    <div className="container">
     
      <div className="top-nav">
        {Object.keys(data).map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentIndex(0);
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="content">
        
        <div className="sidebar">
          <h3>{selectedCategory} Topics</h3>

          <select
            className="mobile-dropdown"
            value={currentIndex}
            onChange={(e) => setCurrentIndex(Number(e.target.value))}
          >
            {topics.map((topic, index) => (
              <option key={index} value={index}>
                {topic.title}
              </option>
            ))}
          </select>

          <ul className="desktop-list">
            {topics.map((topic, index) => (
              <li
                key={index}
                className={index === currentIndex ? "active" : ""}
                onClick={() => setCurrentIndex(index)}
              >
                {topic.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="main">
          <h2>{topics[currentIndex].title}</h2>
          <p>{topics[currentIndex].description}</p>

      
          <div className="example">
            <pre>
              <code>{topics[currentIndex].example}</code>
            </pre>
            <button className="copy-btn" onClick={handleCopy}>
              Copy
            </button>
            {copySuccess && <span className="copy-success">Copied!</span>}
          </div>

          <div className="buttons">
            <button onClick={handlePrev} disabled={currentIndex === 0}>
              Prev
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === topics.length - 1}
            >
              Next
            </button>
            {selectedCategory!="React" && <a
              href="/editor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="tryYourself">Try Yourself</button>
            </a>    }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tutorial;
