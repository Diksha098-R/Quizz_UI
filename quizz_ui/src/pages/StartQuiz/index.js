import React from "react";
import Button from 'react-bootstrap/Button';
import './startQuiz.css';
import { useNavigate } from 'react-router-dom';


export default function StartQuiz(props) {
  const navigate = useNavigate();
  
  const handleStart = () => {
    console.log('start quiz');
    navigate('/question');
  }

  return (
    <div className="quiz-ctn">
      <div className="quiz-box">
        <div className="label"><h2 className="text">Quiz</h2></div>
        <div className="start-btn"><Button onClick={() => handleStart()} variant="primary">Start</Button></div>
      </div>
    </div>
  )
}