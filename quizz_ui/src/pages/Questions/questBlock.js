import React, { useState, useEffect, useContext} from "react";
import { useNavigate } from 'react-router-dom';
import CheckboxGroup from "../../components/checkbox";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { saveQuestionResponse, getScore } from "../../apis";
import QuizButton from "../../components/button";
import './question.css';

export default function QuestBlock(props) {
  const navigate = useNavigate();

  const [data, setdata] = useState(props.data)
  const [questNum, setquestNum] = useState(0);
  const [optionChecked, setoptionChecked] = useState([]);
  const [startTime, setstartTime] = useState(null);

  useEffect(() => {
    localStorage.removeItem('quiz')
  }, [])

  useEffect(() => {
    let time = new Date();
    setstartTime(time);
  }, [questNum])
  
  const onSubmit = async () => {
    let endTime = new Date();
    let timeDiff = endTime - startTime;

    //set responses in localstorage
    let allresponses = JSON.parse(localStorage.getItem('quiz'));

    if (!allresponses) allresponses = {}
    allresponses[questNum] = {
      answer: [...optionChecked],
      time: timeDiff
    };
    localStorage.setItem('quiz', JSON.stringify(allresponses));
    
    //if its the last question then submit the test
    if (questNum === data.length - 1) {
      saveQuestionResponse(questNum);
      navigate('/score');
    } else {
      saveQuestionResponse(questNum);
    }
    
    //go to next question
    setoptionChecked([]);
    setquestNum(questNum + 1);

  }

  return (
    <div className="quest-block-box-ctn">
      <div className="quest-block-box">
        <div className="progressbar">
          <CircularProgressbar value={`${((questNum + 1) / data.length) * 100}`} minValue={0} maxValue={100} text={`${questNum + 1}/${data.length}`} />
        </div>
        <div className="body">
          <div key={questNum} className="question-text">{data && data.length && data[questNum].question.text}</div>
          {
            data && data[questNum] && data[questNum].image
              ? <div div className="image"><img alt="img" src={data && data[questNum] && data[questNum].image} width={180} height={180} /></div>
                : null
          }
          <div className="options">
            {
              data && data[questNum] && data[questNum].options && data[questNum].options.map((option, index) => {
                return (
                  <div className="checkbox-item" key={index}>
                  <CheckboxGroup
                    key={index}
                    option={option}
                    checkboxClickedAt={(value) => {
                      let oldVal = [...optionChecked]
                      if (value) {
                        oldVal.push(option);
                        setoptionChecked(oldVal);
                      } else {
                        oldVal.splice(oldVal.indexOf(option), 1);
                        setoptionChecked(oldVal);
                      }
                    }}
                    checked={optionChecked.includes(option)}
                  />
                  </div>
                )
              })
            }
          </div>
          <div className="start-btn">
            <QuizButton
              content={'Next'}
              disabled={optionChecked.length === 0 ? true : false}
              handleClick={() => onSubmit()}
            />
          </div>
        </div>
      </div>
    </div>
  )
}