import React, {useState, useEffect} from "react";
import GaugeChart from 'react-gauge-chart'
import { getScore } from "../../apis";
import QuizButton from "../../components/button";
import { useNavigate } from 'react-router-dom';
import '../Questions/question.css';
import './score.css'

export default function Score() {
  const navigate = useNavigate();
  const [score, setscore] = useState({});
  const [percentage, setpercentage] = useState(0);

  useEffect(() => {
    callGetScoreApi()
  }, [])

  const callGetScoreApi = async () => {
      let allresponses = JSON.parse(localStorage.getItem('quiz'));
      let score = await getScore({...allresponses});
      setscore(score.data);
      calculatePercentage(score.data);
      
  }

  const calculatePercentage = (data) => {
    let correct = data.correctAnswer.length;
    let incorrect = data.incorrectAnswer.length;
    let per = (correct / incorrect);
    setpercentage(parseFloat(per.toFixed(2)));
  }

  const handleClick = () => {
    navigate('/start');
  }
  
  return (
    <div className="score-ctn">
      <div className="score-block-box">
        <h2 className="header">Your Result</h2>
        <div className="body">
          <GaugeChart
            id="gauge-chart2"
            className="score-meter"
            nrOfLevels={20} 
            percent={percentage} 
            textColor={'#000000'}
            arcPadding={0}
            cornerRadius={0}
          />
        </div>
          <div className="answers">
            <div className="ans correct">
              <div className="dot correct-dot"></div>
              <div className="num">{ score && score.correctAnswer ? score.correctAnswer.length : 0}</div>
              <div className="text">correct</div>
            </div>
            <div className="ans incorrect">
              <div className="dot incorrect-dot"></div>
              <div className="num">{ score && score.incorrectAnswer ? score.incorrectAnswer.length : 0}</div>
              <div className="text">incorrect</div>
            </div>
          </div>
        <div className="start-btn">
          <QuizButton
            content={'Start again'}
            handleClick={() => handleClick()}
          />
          </div>
      </div>
    </div>
  )
}