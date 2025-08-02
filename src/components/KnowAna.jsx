import React, { useState, useEffect } from 'react';
import './KnowAna.css';

const baseQuestions = [
  { question: "Ana's comfort food?", answer: "Maggi 🍜" },
  { question: "Ana's favorite color?", answer: "Purple 💜" },
  { question: "Ana's dream travel destination?", answer: "Switzerland 🇨🇭" },
  { question: "Ana’s birthday?", answer: "6th August 🎂" },
  { question: "Ana’s favorite dessert?", answer: "Chocolate Lava Cake 🍫" },
  { question: "Ana’s favorite movie?", answer: "The Notebook 🎥" },
  { question: "Ana’s preferred beverage?", answer: "Cold Coffee ☕" },
  { question: "Ana’s favorite flower?", answer: "Lily 🌸" },
  { question: "Ana’s favorite holiday?", answer: "Christmas 🎄" },
  { question: "Ana’s pet name for you?", answer: "Babu 🐣" },
  { question: "Ana’s favorite animal?", answer: "Dog 🐶" },
  { question: "Ana’s favorite ice cream flavor?", answer: "Belgian Chocolate 🍦" },
  { question: "Ana’s favorite shopping site?", answer: "Myntra 🛍️" },
  { question: "Ana’s go-to outfit?", answer: "Kurti and Jeans 👗" },
  { question: "Ana’s hobby?", answer: "Painting 🎨" },
  { question: "Ana’s favorite series?", answer: "Friends 👯‍♀️" },
  { question: "Ana’s zodiac sign?", answer: "Leo ♌" },
  { question: "Ana’s favorite emoji?", answer: "🥺" },
  { question: "Ana’s favorite music genre?", answer: "Romantic ❤️" },
  { question: "Ana’s favorite person?", answer: "You 😄" }
];

const KnowAna = () => {
  const [questions, setQuestions] = useState(baseQuestions);
  const [responses, setResponses] = useState(Array(baseQuestions.length).fill(null));
  const [corrections, setCorrections] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const storedCorrections = JSON.parse(localStorage.getItem('anaQuizCorrections')) || {};
    if (Object.keys(storedCorrections).length > 0) {
      const updatedQuestions = baseQuestions.map((q, index) => ({
        ...q,
        answer: storedCorrections[index] || q.answer
      }));
      setQuestions(updatedQuestions);
      setCorrections(storedCorrections);
    }
  }, []);

  const handleResponse = (index, isCorrect) => {
    const updated = [...responses];
    updated[index] = isCorrect;
    setResponses(updated);
  };

  const handleCorrectionChange = (index, value) => {
    setCorrections(prev => ({ ...prev, [index]: value }));
  };

  const handleFinalSubmit = () => {
    localStorage.setItem("anaQuizCorrections", JSON.stringify(corrections));
    const updated = questions.map((q, i) => ({
      ...q,
      answer: corrections[i] || q.answer
    }));
    setQuestions(updated);
    setSubmitted(true);
  };

  const isComplete = responses.every(r => r !== null);
  const score = responses.filter(r => r === true).length;

  return (
      <div className="know-ana">
        <h2>🧠 How Well Do I Know Ana?</h2>
        <div className="accordion">
          {questions.map((q, index) => (
              <div className={`accordion-item ${responses[index] === true ? 'correct' : responses[index] === false ? 'wrong' : ''}`} key={index}>
                <input type="checkbox" id={`q${index}`} className="accordion-toggle" />
                <label htmlFor={`q${index}`} className="accordion-question">{q.question}</label>
                <div className="accordion-answer">
                  <p><strong>Answer:</strong> {q.answer}</p>

                  {responses[index] === null ? (
                      <div className="response-buttons">
                        <button className="right" onClick={() => handleResponse(index, true)}>✅ Right</button>
                        <button className="wrong" onClick={() => handleResponse(index, false)}>❌ Wrong</button>
                      </div>
                  ) : (
                      <p className="response-summary">
                        You marked this as: <strong>{responses[index] ? "✅ Right" : "❌ Wrong"}</strong>
                      </p>
                  )}

                  {responses[index] === false && (
                      <div className="correction-box">
                        <label htmlFor={`correct-answer-${index}`}>Your Correct Answer:</label>
                        <input
                            type="text"
                            id={`correct-answer-${index}`}
                            value={corrections[index] || ''}
                            onChange={(e) => handleCorrectionChange(index, e.target.value)}
                            placeholder="Enter correct answer"
                        />
                      </div>
                  )}
                </div>
              </div>
          ))}
        </div>

        <div className="final-submit">
          <button
              onClick={handleFinalSubmit}
              disabled={!isComplete}
              title={!isComplete ? "Answer all questions first" : ""}
          >
            💾 Save All Corrections
          </button>
        </div>

        {submitted && (
            <div className="score">
              <h2>Score: {score} / {questions.length}</h2>
              <p>
                {score === 20 ? '💖 Perfect! You really know Ana well!' :
                    score > 10 ? '😊 Good effort!' :
                        '🤔 Time to spend more time with Ana!'}
              </p>
            </div>
        )}
      </div>
  );
};

export default KnowAna;
