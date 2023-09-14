import React from "react";
import Button from 'react-bootstrap/Button';
import './question.css';
import { Link } from "react-router-dom";

export default function Question() {

  return (
    <div className="quiz-ctn">
      <div className="question-box">
        <div className="label"><h2 className="text">Quiz</h2></div>
        {/* <div className="start-btn"><Button onClick={() => } variant="primary">Start</Button></div> */}
      </div>
    </div>
  )
}