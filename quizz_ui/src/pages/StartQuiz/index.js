import React, { useState, createContext} from "react";
import './startQuiz.css';
import { useNavigate } from 'react-router-dom';
import QuizButton from "../../components/button";

export const QuizListContext = createContext();

export default function StartQuiz(props) {
  const [quizQuestionsList, setquizQuestionsList] = useState([]);
  const navigate = useNavigate();
  
  const handleStart = async () => {
    navigate('/question');
  }

  return (
    <QuizListContext.Provider value={quizQuestionsList}>
    <div className="quiz-ctn">
      <div className="quiz-box">
        <div className="label"><h2 className="text">Quiz</h2></div>
          <div className="start-btn">
            <QuizButton
              content={'Start'}
              handleClick={() => handleStart()}
            />
          </div>
      </div>
    </div>
    </QuizListContext.Provider>
  )
}