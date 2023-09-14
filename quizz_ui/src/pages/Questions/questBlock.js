import React, { useState, useEffect, useContext} from "react";
import Button from 'react-bootstrap/Button';
import './question.css';
import { useNavigate } from 'react-router-dom';
import { QuizContext } from ".";
import CheckboxGroup from "../../components/checkbox";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export default function QuestBlock(props) {
  const QuizContextUser = useContext(QuizContext)
  const navigate = useNavigate();

  const [data, setdata] = useState(props.data)
  const [questNum, setquestNum] = useState(parseInt(QuizContextUser));
  const [optionChecked, setoptionChecked] = useState([]);

  useEffect(() => {
    
    console.log('in Q block ', QuizContextUser, data);
  }, [])
  
  
  const onSubmit = () => {
    console.log('submit btn quiz- setting next num ', optionChecked, ((questNum+1)/data.length)*100);
    setquestNum(questNum + 1)
  }

  return (
    <div className="quest-block-box-ctn">
      <div className="quest-block-box">
        <div className="progressbar">
          <CircularProgressbar value={`${((questNum + 1) / data.length) * 100}`} minValue={0} maxValue={100} text={`${questNum + 1}/${data.length}`} />
        </div>
        <div className="body">
          <div key={questNum} className="question-text">{data && data.length && data[questNum].question}</div>
          {
            data[questNum].image
              ? <div div className="image"><img alt="img" src={data[questNum].image} width={180} height={180} /></div>
                : null
          }
          <div className="options">
            {
              data[questNum].options.map((option, index) => {
                return (
                  <div className="checkbox-item">
                  <CheckboxGroup
                    key={index}
                    option={option}
                    checkboxClickedAt={(value) => {
                      console.log({optionChecked});
                      let oldVal = [...optionChecked]
                      if (value) {
                        oldVal.push(option);
                        setoptionChecked(oldVal);
                      } else {
                        oldVal.splice(oldVal.indexOf(option), 1);
                        setoptionChecked(oldVal);
                      }
                      console.log('option checked ', index);
                    }}
                    checked={optionChecked.includes(option)}
                  />
                  </div>
                )
              })
            }
          </div>
          <div className="start-btn"><Button onClick={() => onSubmit()} variant="primary">Start</Button></div>
        </div>
      </div>
    </div>
  )
}