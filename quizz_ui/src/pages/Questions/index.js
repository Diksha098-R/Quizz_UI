import React, { useState, useEffect, createContext} from "react";
import './question.css';
import QuestBlock from "./questBlock";
import { getAllQuestions } from "../../apis";

export const QuizContext = createContext();

export default function Question() {
  const [questions, setquestions] = useState([]);

  useEffect(() => {
    getQuizQuestions();
  }, [])
  
  const getQuizQuestions = async () => {
    let results = await getAllQuestions();
    setquestions(results);
  }

  return (
    <QuizContext.Provider value={questions} key={questions}>
    <div className="quiz-ctn">
      <div className="question-box">
        {
            <QuestBlock data={questions} />
        }
      </div>
      </div>
      </QuizContext.Provider>
  )
}