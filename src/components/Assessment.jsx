import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Assessment.css';

const Assessment = () => {
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState({});
  const [score, setScore] = useState(null);

  const correctAnswers = {
    q1: "c", q2: "c", q3: "c", q4: "b", q5: "c", 
    q6: "b", q7: "d", q8: "c", q9: "b", q10: "b"
  };

  const handleAnswerChange = (question, value) => {
    setAnswers(prev => ({
      ...prev,
      [question]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newScore = 0;
    const newResults = {};

    for (let i = 1; i <= 10; i++) {
      const q = `q${i}`;
      const isCorrect = answers[q] === correctAnswers[q];
      newResults[q] = {
        isCorrect,
        correctAnswer: correctAnswers[q]
      };
      if (isCorrect) newScore++;
    }

    setResults(newResults);
    setScore(newScore);
  };

  return (
    <div className="assessment-container">
      <header>
        <div className="header-content">
          <div className="logo-container">
            <img 
              src="/Logo.jpg" 
              alt="MKS Electronics Logo" 
              className="logo-img"
            />
          </div>
          <div className="title-container">
            <h1>Assessment</h1>
            <Link to="/" className="home-button">
              <span>App</span>
            </Link>
          </div>
        </div>

        <nav className="main-nav">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/company">Company Profile</Link></li>
            <li><Link to="/registration">Course Registration</Link></li>
            <li><Link to="/learning">Interactive Learning</Link></li>
            <li><Link to="/assessment">Assessment</Link></li>
            <li><Link to="/feedback">Feedback & Contact Us</Link></li>
            <li><Link to="/tv-parts">TV Internal Parts</Link></li>
            <li><Link to="/mobile-parts">Mobile Internal Parts</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="assessment-box">
          <h2>Take an Assessment</h2>
          <form onSubmit={handleSubmit}>
            <div className="questions">
              <div className="question">
                <p>1. Which component is responsible for displaying images on a TV?</p>
                <label><input type="radio" name="q1" value="a" onChange={() => handleAnswerChange('q1', 'a')} /> a) Speaker</label><br />
                <label><input type="radio" name="q1" value="b" onChange={() => handleAnswerChange('q1', 'b')} /> b) Tuner</label><br />
                <label><input type="radio" name="q1" value="c" onChange={() => handleAnswerChange('q1', 'c')} /> c) LCD/LED Panel</label><br />
                <label><input type="radio" name="q1" value="d" onChange={() => handleAnswerChange('q1', 'd')} /> d) Transformer</label>
                {results.q1 && (
                  <div className={`result ${results.q1.isCorrect ? 'correct' : 'incorrect'}`}>
                    {results.q1.isCorrect ? '✅ Correct' : `❌ Incorrect - Correct: ${results.q1.correctAnswer.toUpperCase()}`}
                  </div>
                )}
              </div>

              <div className="question">
                <p>2. What is the function of a smartphone's processor?</p>
                <label><input type="radio" name="q2" value="a" onChange={() => handleAnswerChange('q2', 'a')} /> a) Power supply regulation</label><br />
                <label><input type="radio" name="q2" value="b" onChange={() => handleAnswerChange('q2', 'b')} /> b) Image display</label><br />
                <label><input type="radio" name="q2" value="c" onChange={() => handleAnswerChange('q2', 'c')} /> c) Execute applications & processes</label><br />
                <label><input type="radio" name="q2" value="d" onChange={() => handleAnswerChange('q2', 'd')} /> d) Signal reception</label>
                {results.q2 && (
                  <div className={`result ${results.q2.isCorrect ? 'correct' : 'incorrect'}`}>
                    {results.q2.isCorrect ? '✅ Correct' : `❌ Incorrect - Correct: ${results.q2.correctAnswer.toUpperCase()}`}
                  </div>
                )}
              </div>

              <div className="question">
                <p>3. Which component stores data in mobile phones?</p>
                <label><input type="radio" name="q3" value="a" onChange={() => handleAnswerChange('q3', 'a')} /> a) RAM</label><br />
                <label><input type="radio" name="q3" value="b" onChange={() => handleAnswerChange('q3', 'b')} /> b) ROM</label><br />
                <label><input type="radio" name="q3" value="c" onChange={() => handleAnswerChange('q3', 'c')} /> c) Storage (eMMC/UFS)</label><br />
                <label><input type="radio" name="q3" value="d" onChange={() => handleAnswerChange('q3', 'd')} /> d) GPU</label>
                {results.q3 && (
                  <div className={`result ${results.q3.isCorrect ? 'correct' : 'incorrect'}`}>
                    {results.q3.isCorrect ? '✅ Correct' : `❌ Incorrect - Correct: ${results.q3.correctAnswer.toUpperCase()}`}
                  </div>
                )}
              </div>

              <div className="question">
                <p>4. What converts AC power to DC in a TV power supply?</p>
                <label><input type="radio" name="q4" value="a" onChange={() => handleAnswerChange('q4', 'a')} /> a) Transformer</label><br />
                <label><input type="radio" name="q4" value="b" onChange={() => handleAnswerChange('q4', 'b')} /> b) Rectifier</label><br />
                <label><input type="radio" name="q4" value="c" onChange={() => handleAnswerChange('q4', 'c')} /> c) Tuner</label><br />
                <label><input type="radio" name="q4" value="d" onChange={() => handleAnswerChange('q4', 'd')} /> d) Speaker</label>
                {results.q4 && (
                  <div className={`result ${results.q4.isCorrect ? 'correct' : 'incorrect'}`}>
                    {results.q4.isCorrect ? '✅ Correct' : `❌ Incorrect - Correct: ${results.q4.correctAnswer.toUpperCase()}`}
                  </div>
                )}
              </div>

              <div className="question">
                <p>5. Which part of a mobile phone is responsible for network signal reception?</p>
                <label><input type="radio" name="q5" value="a" onChange={() => handleAnswerChange('q5', 'a')} /> a) SIM card</label><br />
                <label><input type="radio" name="q5" value="b" onChange={() => handleAnswerChange('q5', 'b')} /> b) Motherboard</label><br />
                <label><input type="radio" name="q5" value="c" onChange={() => handleAnswerChange('q5', 'c')} /> c) Antenna</label><br />
                <label><input type="radio" name="q5" value="d" onChange={() => handleAnswerChange('q5', 'd')} /> d) Battery</label>
                {results.q5 && (
                  <div className={`result ${results.q5.isCorrect ? 'correct' : 'incorrect'}`}>
                    {results.q5.isCorrect ? '✅ Correct' : `❌ Incorrect - Correct: ${results.q5.correctAnswer.toUpperCase()}`}
                  </div>
                )}
              </div>

              <div className="question">
                <p>6. What is the main function of a TV tuner?</p>
                <label><input type="radio" name="q6" value="a" onChange={() => handleAnswerChange('q6', 'a')} /> a) Boost audio signals</label><br />
                <label><input type="radio" name="q6" value="b" onChange={() => handleAnswerChange('q6', 'b')} /> b) Convert radio signals to video & audio</label><br />
                <label><input type="radio" name="q6" value="c" onChange={() => handleAnswerChange('q6', 'c')} /> c) Store video files</label><br />
                <label><input type="radio" name="q6" value="d" onChange={() => handleAnswerChange('q6', 'd')} /> d) Regulate power</label>
                {results.q6 && (
                  <div className={`result ${results.q6.isCorrect ? 'correct' : 'incorrect'}`}>
                    {results.q6.isCorrect ? '✅ Correct' : `❌ Incorrect - Correct: ${results.q6.correctAnswer.toUpperCase()}`}
                  </div>
                )}
              </div>

              <div className="question">
                <p>7. Which type of display technology is commonly used in modern smartphones?</p>
                <label><input type="radio" name="q7" value="a" onChange={() => handleAnswerChange('q7', 'a')} /> a) CRT</label><br />
                <label><input type="radio" name="q7" value="b" onChange={() => handleAnswerChange('q7', 'b')} /> b) LCD</label><br />
                <label><input type="radio" name="q7" value="c" onChange={() => handleAnswerChange('q7', 'c')} /> c) LED</label><br />
                <label><input type="radio" name="q7" value="d" onChange={() => handleAnswerChange('q7', 'd')} /> d) OLED</label>
                {results.q7 && (
                  <div className={`result ${results.q7.isCorrect ? 'correct' : 'incorrect'}`}>
                    {results.q7.isCorrect ? '✅ Correct' : `❌ Incorrect - Correct: ${results.q7.correctAnswer.toUpperCase()}`}
                  </div>
                )}
              </div>

              <div className="question">
                <p>8. What component processes graphics in a mobile device?</p>
                <label><input type="radio" name="q8" value="a" onChange={() => handleAnswerChange('q8', 'a')} /> a) RAM</label><br />
                <label><input type="radio" name="q8" value="b" onChange={() => handleAnswerChange('q8', 'b')} /> b) CPU</label><br />
                <label><input type="radio" name="q8" value="c" onChange={() => handleAnswerChange('q8', 'c')} /> c) GPU</label><br />
                <label><input type="radio" name="q8" value="d" onChange={() => handleAnswerChange('q8', 'd')} /> d) Modem</label>
                {results.q8 && (
                  <div className={`result ${results.q8.isCorrect ? 'correct' : 'incorrect'}`}>
                    {results.q8.isCorrect ? '✅ Correct' : `❌ Incorrect - Correct: ${results.q8.correctAnswer.toUpperCase()}`}
                  </div>
                )}
              </div>

              <div className="question">
                <p>9. Which part of a TV enhances sound quality?</p>
                <label><input type="radio" name="q9" value="a" onChange={() => handleAnswerChange('q9', 'a')} /> a) Power supply</label><br />
                <label><input type="radio" name="q9" value="b" onChange={() => handleAnswerChange('q9', 'b')} /> b) Speaker</label><br />
                <label><input type="radio" name="q9" value="c" onChange={() => handleAnswerChange('q9', 'c')} /> c) Motherboard</label><br />
                <label><input type="radio" name="q9" value="d" onChange={() => handleAnswerChange('q9', 'd')} /> d) Backlight</label>
                {results.q9 && (
                  <div className={`result ${results.q9.isCorrect ? 'correct' : 'incorrect'}`}>
                    {results.q9.isCorrect ? '✅ Correct' : `❌ Incorrect - Correct: ${results.q9.correctAnswer.toUpperCase()}`}
                  </div>
                )}
              </div>

              <div className="question">
                <p>10. What is the purpose of a smartphone's lithium-ion battery?</p>
                <label><input type="radio" name="q10" value="a" onChange={() => handleAnswerChange('q10', 'a')} /> a) Store contacts</label><br />
                <label><input type="radio" name="q10" value="b" onChange={() => handleAnswerChange('q10', 'b')} /> b) Power the device</label><br />
                <label><input type="radio" name="q10" value="c" onChange={() => handleAnswerChange('q10', 'c')} /> c) Boost signal strength</label><br />
                <label><input type="radio" name="q10" value="d" onChange={() => handleAnswerChange('q10', 'd')} /> d) Control display brightness</label>
                {results.q10 && (
                  <div className={`result ${results.q10.isCorrect ? 'correct' : 'incorrect'}`}>
                    {results.q10.isCorrect ? '✅ Correct' : `❌ Incorrect - Correct: ${results.q10.correctAnswer.toUpperCase()}`}
                  </div>
                )}
              </div>
            </div>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
          {score !== null && (
            <div className="score-box">
              <h3>Your Score: {score}/10</h3>
            </div>
          )}
        </div>
      </main>

      <footer>
        <p>&copy; 2023 MKS Electronics</p>
      </footer>
    </div>
  );
};

export default Assessment;