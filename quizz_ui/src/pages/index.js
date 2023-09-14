import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './LandingPage';
import StartQuiz from './StartQuiz';
import Question from './Questions';
import QuestBlock from './Questions/questBlock';

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/start' element={<StartQuiz />} />
        <Route path='/question' element={<Question />} />
        <Route path='/question/:num' element={<QuestBlock />} />
      </Routes>
    </BrowserRouter>
  )
}