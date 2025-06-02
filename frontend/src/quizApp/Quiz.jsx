import React, { useState, useEffect } from 'react';
import './Quiz.css';
import { mathData } from './data/Mathdata';
import { englishData } from './data/Englishdata';
import { gaData } from './data/GAdata';
import { useSearchParams } from 'react-router-dom';

export default function Quiz() {
  const [searchParams] = useSearchParams();
  const subject = searchParams.get('subject');
  const category = searchParams.get('category');

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [streak, setStreak] = useState(0);
  const [showStreak, setShowStreak] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [showQuestionList, setShowQuestionList] = useState(false);
  const [markedForReview, setMarkedForReview] = useState([]);
  const [showReview, setShowReview] = useState(false);
  const [expandedImage, setExpandedImage] = useState(null);

  useEffect(() => {
    let quizData = null;
    let quizName = 'Quiz';

    if (subject === 'math' && category && mathData[category]) {
      quizData = mathData[category].questions;
      quizName = mathData[category].name || 'Math Quiz';
    } else if (subject === 'english' && category && englishData[category]) {
      quizData = englishData[category].questions;
      quizName = englishData[category].name || 'English Quiz';
    } else if (subject === 'ga' && category && gaData[category]) {
      quizData = gaData[category].questions;
      quizName = gaData[category].name || 'General Aptitude Quiz';
    }

    if (quizData && quizData.length > 0) {
      setQuestions(quizData);
      setSelectedOptions(Array(quizData.length).fill(null));
      setMarkedForReview(Array(quizData.length).fill(false));
    } else {
      setQuestions([]); 
    }
  }, [subject, category]);

  useEffect(() => {
    let timer;
    if (quizStarted && !showResults) {
      timer = setInterval(() => {
        setElapsedTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [quizStarted, showResults]);

  const handleStart = () => {
    setQuizStarted(true);
    setStartTime(new Date());
    setElapsedTime(0);
  };

  const handleImageClick = (imageUrl) => {
    setExpandedImage(imageUrl);
  };

  const handleCloseExpandedImage = () => {
    setExpandedImage(null);
  };

  const handleOptionSelect = (optionIndex) => {
    const newSelections = [...selectedOptions];
    newSelections[currentIndex] = optionIndex;
    setSelectedOptions(newSelections);

    if (optionIndex === questions[currentIndex]?.correct) {
      setStreak(prev => prev + 1);
      setShowStreak(true);
      setTimeout(() => setShowStreak(false), 2000);
    } else {
      setStreak(0);
    }
  };

  const handleSubmit = () => {
    setShowConfirmation(true);
  };

  const confirmSubmit = () => {
    setEndTime(new Date());
    setShowResults(true);
    setShowConfirmation(false);
  };

  const toggleQuestionList = () => {
    setShowQuestionList(prev => !prev);
  };

  const handleJumpToQuestion = (index) => {
    setCurrentIndex(index);
    setShowQuestionList(false);
  };

  const toggleMarkForReview = () => {
    const newMarkedForReview = [...markedForReview];
    newMarkedForReview[currentIndex] = !newMarkedForReview[currentIndex];
    setMarkedForReview(newMarkedForReview);
  };

  const correctCount = selectedOptions.reduce((count, selected, index) => {
    return selected === questions[index]?.correct ? count + 1 : count;
  }, 0);

  const formatTime = (seconds) => {
    const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
    const remainingSeconds = String(seconds % 60).padStart(2, '0');
    return `${minutes}:${remainingSeconds}`;
  };

  const getScoreColor = (score) => {
    if (score >= 80) return '#10B981';
    if (score >= 60) return '#F59E0B';
    return '#EF4444';
  };

  if (!questions.length) {
    return (
      <div className="zenova-app">
        <div className="zenova-popup active">
          <div className="zenova-popup-content">
            <div className="zenova-popup-header">
              <i className="fas fa-exclamation-circle zenova-logo"></i>
              <h1>Quiz Not Found</h1>
            </div>
            <div className="zenova-popup-body">
              <p>The requested quiz could not be found.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="zenova-app">
      {!quizStarted && !showResults && (
        <div className="zenova-popup active">
          <div className="zenova-popup-content">
            <div className="zenova-popup-header">
              <div className="zenova-welcome-logo">
                <i className="fas fa-rocket"></i>
              </div>
              <h1>Welcome to Zenova Quiz</h1>
              <div className="zenova-quiz-topic">
                <h2>
                  {subject === 'math' && mathData[category]?.name}
                  {subject === 'english' && englishData[category]?.name}
                  {subject === 'ga' && gaData[category]?.name}
                  {!subject || !category || (!mathData[category] && !englishData[category] && !gaData[category]) ? 'Quiz' : ''}
                </h2>
                <p className="zenova-quiz-description">
                  {subject === 'math' && mathData[category]?.description}
                  {subject === 'english' && englishData[category]?.description}
                  {subject === 'ga' && gaData[category]?.description}
                  {!subject || !category || (!mathData[category] && !englishData[category] && !gaData[category]) ? 'Test your knowledge with our interactive quiz!' : ''}
                </p>
              </div>
            </div>
            <div className="zenova-popup-body">
              <div className="zenova-features">
                <div className="zenova-feature-item">
                  <i className="fas fa-question-circle"></i>
                  <span>{questions.length} Questions</span>
                  <p>Test your knowledge</p>
                </div>
                <div className="zenova-feature-item">
                  <i className="fas fa-clock"></i>
                  <span>Unlimited Time</span>
                  <p>Take your time</p>
                </div>
                <div className="zenova-feature-item">
                  <i className="fas fa-chart-bar"></i>
                  <span>Detailed Results</span>
                  <p>Track your progress</p>
                </div>
              </div>
              <div className="zenova-start-section">
                <button onClick={handleStart} className="zenova-glow-btn">
                  <span>Start Quiz</span>
                  <i className="fas fa-play"></i>
                </button>
                <p className="zenova-quiz-tip">Tip: Read each question carefully before answering</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {quizStarted && !showResults && (
        <div className="zenova-quiz-container">
          <div className="zenova-quiz-header" style={{ '--progress-width': `${((currentIndex + 1) / questions.length) * 100}%` }}>
            <div className="zenova-quiz-info">
              <div className="zenova-timer">
                <i className="fas fa-clock"></i>
                <span>{formatTime(elapsedTime)}</span>
              </div>
            </div>
            {streak > 1 && showStreak && (
              <div className="zenova-streak">
                <i className="fas fa-fire"></i> {streak} Streak!
              </div>
            )}
            <button onClick={handleSubmit} className="zenova-submit-btn">
              <i className="fas fa-check"></i>
              <span>Submit Quiz</span>
            </button>
          </div>

          <div className="zenova-quiz-content">
            <div className="zenova-question active">
              <div className="zenova-question-header">
                <span className="zenova-question-number">Question {currentIndex + 1} of {questions.length}</span>
                <button
                  className={`zenova-mark-review-btn ${markedForReview[currentIndex] ? 'marked' : ''}`}
                  onClick={toggleMarkForReview}
                >
                  <i className={`fas ${markedForReview[currentIndex] ? 'fa-bookmark' : 'fa-bookmark-o'}`}></i>
                  <span>{markedForReview[currentIndex] ? 'Marked for Review' : 'Mark for Review'}</span>
                </button>
                <h2>{questions[currentIndex]?.question}</h2>
              </div>
              {questions[currentIndex]?.image && (
                <div className="zenova-question-image"
                  onClick={() => handleImageClick(questions[currentIndex]?.image)}
                >
                  <div className="zenova-expand-hint">Click to expand</div>
                  <img
                    src={questions[currentIndex].image}
                    alt="Question illustration"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.style.display = 'none';
                    }}
                  />
                </div>
              )}
              <div className="zenova-options-container">
                {questions[currentIndex]?.options.map((option, i) => (
                  <div
                    key={i}
                    className={`zenova-option ${selectedOptions[currentIndex] === i ? 'selected' : ''}`}
                    onClick={() => handleOptionSelect(i)}
                  >
                    <span className="zenova-option-marker">{String.fromCharCode(65 + i)}</span>
                    <span className="zenova-option-text">{option}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="zenova-navigation">
            <button
              className="zenova-nav-btn"
              onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
              disabled={currentIndex === 0}
            >
              <i className="fas fa-chevron-left"></i>
              <span>Previous</span>
            </button>
            <button className="zenova-nav-nav-center-btn" onClick={toggleQuestionList}>
              <i className="fas fa-grip-horizontal"></i>
            </button>
            <button
              className="zenova-nav-btn"
              onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, questions.length - 1))}
              disabled={currentIndex === questions.length - 1}
            >
              <span>Next</span>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      )}

      {showQuestionList && (
        <div className="zenova-question-list-overlay" onClick={toggleQuestionList}>
          <div className="zenova-question-list-popup" onClick={(e) => e.stopPropagation()}>
            <h2>Questions</h2>
            <div className="zenova-question-numbers">
              {questions.map((_, index) => (
                <button
                  key={index}
                  className={`zenova-question-number-btn ${currentIndex === index ? 'current' : ''} ${selectedOptions[index] !== null ? 'attempted' : ''
                    } ${markedForReview[index] ? 'marked-for-review' : ''}`}
                  onClick={() => handleJumpToQuestion(index)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <div className="zenova-legend">
              <span className="zenova-legend-item"><span className="zenova-legend-marker attempted"></span> Attempted</span>
              <span className="zenova-legend-item"><span className="zenova-legend-marker current"></span> Current Question</span>
              <span className="zenova-legend-item"><span className="zenova-legend-marker marked-for-review"></span> Marked for Review</span>
            </div>
          </div>
        </div>
      )}

      {showConfirmation && (
        <div className="zenova-submit-confirmation-overlay">
          <div className="zenova-submit-confirmation-popup">
            <div className="zenova-popup-content">
              <div className="zenova-popup-header">
                <i className="fas fa-question-circle zenova-logo"></i>
                <h2>Confirm Submission</h2>
              </div>
              <div className="zenova-popup-body">
                <p>Are you sure you want to submit your answers?</p>
                <div className="zenova-confirmation-buttons">
                  <button onClick={() => setShowConfirmation(false)} className="zenova-nav-btn">
                    Continue Quiz
                  </button>
                  <button onClick={confirmSubmit} className="zenova-glow-btn">
                    Submit Quiz
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showResults && (
        <div className="zenova-popup active">
          <div className="zenova-popup-content">
            <div className="zenova-results-header">
              <i className="fas fa-trophy zenova-trophy"></i>
              <h2>Quiz Completed!</h2>
            </div>
            {!showReview ? (
              <div className="zenova-results-body">
                <div className="zenova-result-item">
                  <span>Correct Answers:</span>
                  <span>{correctCount}/{questions.length}</span>
                </div>
                <div className="zenova-result-item">
                  <span>Time Taken:</span>
                  <span>{formatTime(Math.floor((endTime - startTime) / 1000))}</span>
                </div>
                <div className="zenova-result-item highlight" style={{ color: getScoreColor((correctCount / questions.length) * 100) }}>
                  <span>Your Score:</span>
                  <span>{((correctCount / questions.length) * 100).toFixed(0)}%</span>
                </div>
                <div className="zenova-results-buttons">
                  <button
                    className="zenova-review-btn"
                    onClick={() => setShowReview(true)}
                  >
                    <i className="fas fa-book-open"></i> Review Answers
                  </button>
                  <button
                    className="zenova-review-btn"
                    onClick={() => {
                      setShowResults(false);
                      setCurrentIndex(0);
                      setQuizStarted(false);
                      setSelectedOptions(Array(questions.length).fill(null));
                      setStreak(0);
                      setShowReview(false); 
                    }}
                  >
                    <i className="fas fa-redo"></i> Try Again
                  </button>
                </div>
              </div>
            ) : (
              <div className="zenova-review-section">
                <h3>Review Answers</h3>
                <div className="zenova-review-questions">
                  {questions.map((question, index) => (
                    <div key={index} className="zenova-review-question">
                      <div className="zenova-review-question-header">
                        <span className="zenova-review-question-number">Question {index + 1}</span>
                        {markedForReview[index] && (
                          <span className="zenova-review-marked">
                            <i className="fas fa-bookmark"></i> Marked for Review
                          </span>
                        )}
                      </div>
                      <h4>{question.question}</h4>
                      <div className="zenova-review-options">
                        {question.options.map((option, optionIndex) => (
                          <div
                            key={optionIndex}
                            className={`zenova-review-option
                              ${selectedOptions[index] === optionIndex ? 'selected' : ''}
                              ${question.correct === optionIndex ? 'correct' : ''}
                              ${selectedOptions[index] !== null && selectedOptions[index] !== question.correct && selectedOptions[index] === optionIndex ? 'incorrect' : ''}
                            `}
                          >
                            <span className="zenova-review-option-marker">{String.fromCharCode(65 + optionIndex)}</span>
                            <span className="zenova-review-option-text">{option}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  className="zenova-review-back-btn"
                  onClick={() => setShowReview(false)}
                >
                  <i className="fas fa-arrow-left"></i> Back to Results Summary
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {expandedImage && (
        <div className="zenova-expanded-image-overlay" onClick={handleCloseExpandedImage}>
          <div className="zenova-expanded-image-container">
            <img src={expandedImage} alt="Expanded question illustration" />
            <button className="zenova-close-expanded-image" onClick={handleCloseExpandedImage}>&times;</button>
          </div>
        </div>
      )}
    </div>
  );
}
