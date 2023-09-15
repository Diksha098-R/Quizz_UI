import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import StartQuiz from './StartQuiz';
import Question from './Questions';
import QuestBlock from './Questions/questBlock';
import Score from './Score';

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to={'/start'} />} />
        <Route index path='/start' element={<StartQuiz />} />
        <Route path='/question' element={<Question />} />
        <Route path='/question/:num' element={<QuestBlock />} />
        <Route path='/score' element={<Score />} />
      </Routes>
    </BrowserRouter>
  )
}