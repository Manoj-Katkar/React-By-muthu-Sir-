import { useRef, useState, useEffect } from 'react';
import './App.css';
import Questions from './data.json';

function App() {
  let [index, setIndex] = useState(0);
  let [que, setQue] = useState(Questions[index]);
  let [lock, setLock] = useState(false);
  let [result, setResult] = useState(false);
  
  let [timer, setTimer] = useState(30); // Timer set to 30 seconds

  let option1 = useRef();
  let option2 = useRef();
  let option3 = useRef();
  let option4 = useRef();
  let option_array = [option1, option2, option3, option4];

  let [score, setScore] = useState(0);

  // Function to check if the answer is correct
  let checkAns = (e, answer) => {
    if (lock === false) {
      if (que.ans === answer) {
        e.target.classList.add("correct");
        setScore((p) => p + 1);
        setLock(true);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        option_array[que.ans - 1].current.classList.add("correct");
      }
      clearInterval(timerId); // Clear timer once an answer is chosen
    }
  };

  // Function to handle the next question
  let handleNext = (e) => {
    if (lock === true || timer === 0) {
      if (index === Questions.length - 1) {
        setResult(true);
        return 0;
      }
      setIndex(++index);
      setQue(Questions[index]);
      setLock(false);
      setTimer(30); // Reset the timer for the next question
      option_array.map((v) => {
        v.current.classList.remove("correct");
        v.current.classList.remove("wrong");
        return null;
      });
    }
  };

  // Countdown timer using useEffect
  useEffect(() => {
    if (timer > 0) {
      var timerId = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      handleNext(); // Move to the next question when the timer reaches 0
    }

    // Clear the interval when the component unmounts or timer changes
    return () => clearInterval(timerId);
  }, [timer, lock]); // Re-run effect if timer or lock changes

  return (
    <div className="quiz-container">
      <article className="quiz-box">
        <h1 className="quiz-title">QUIZ APP</h1>
        <hr className="divider" />
        {result === false ? (
          <>
            <h3 className="question">
              {index + 1}. {que.Question}
            </h3>
            <ul className="options-list">
              <li ref={option1} onClick={(e) => checkAns(e, 1)} className="option">
                {que.option1}
              </li>
              <li ref={option2} onClick={(e) => checkAns(e, 2)} className="option">
                {que.option2}
              </li>
              <li ref={option3} onClick={(e) => checkAns(e, 3)} className="option">
                {que.option3}
              </li>
              <li ref={option4} onClick={(e) => checkAns(e, 4)} className="option">
                {que.option4}
              </li>
            </ul>
            <div className="timer-box">
              <p className="timer">Time Left: {timer} seconds</p>
            </div>
            <button className="next-btn" onClick={handleNext}>
              NEXT
            </button>
            <p className="progress">
              {index + 1} out of {Questions.length}
            </p>
          </>
        ) : (
          <>
            <h2 className="result">
              Your Score is {score} out of {Questions.length}
            </h2>
          </>
        )}
      </article>
    </div>
  );
}

export default App;
