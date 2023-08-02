import { useState } from 'react'
import Home from './pages/HomePage.jsx'
import Charity from './pages/CharityPage.jsx'
import Search from './pages/SearchPage.jsx'
import Poll from './pages/QuestionPage.jsx'
import './global.css'
import { Route, Routes, Link } from 'react-router-dom'

function App() {
  return (
    <div className='phone-screen'>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/charity" element={<Charity />}></Route>
        <Route path="/poll" element={<Poll />}></Route>
      </Routes>
    </div>
  )
}

export default App
