import React, { useState, useEffect, createContext} from "react";
import Button from 'react-bootstrap/Button';
import './question.css';
import { useNavigate } from 'react-router-dom';
import QuestBlock from "./questBlock";

export const QuizContext = createContext();

let data = [
  {
    id: 1,
    question: 'Have you watched friends?',
    options: [
      'Yes', 'No', "Maybe", 'Dont know'
    ]
  },
  {
    id: 2,
    question: 'Have you watched series?',
    options: [
      'Yes', 'No', "Maybe", 'Dont know'
    ]
  }
]
export default function Question() {
  const [questions, setquestions] = useState(data);
  const [currentQuest, setcurrentQuest] = useState(0);
  const navigate = useNavigate();


  useEffect(() => {
    console.log('in navigate');
    // navigate('/question/0')  
  }, [questions])
  

  return (
    <QuizContext.Provider value={currentQuest}>
    <div className="quiz-ctn">
      <div className="question-box">
        {
            <QuestBlock data={questions} />
        }
        {/* <div className="start-btn"><Button onClick={() => } variant="primary">Start</Button></div> */}
      </div>
      </div>
      </QuizContext.Provider>
  )
}