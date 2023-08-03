import { useState } from 'react'
import Home from './pages/HomePage.jsx'
import Charity from './pages/CharityPage.jsx'
import Search from './pages/SearchPage.jsx'
import Poll from './pages/QuestionPage.jsx'
import './global.css'
import './pages/navbar.css'
import './pages/Icons.css'

import { Route, Routes, Link } from 'react-router-dom'

function App() {
  return (
    <div className='phone-screen'>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<Search />}></Route>
        {/* <Route path="/charity" element={<Charity />}></Route> */}
        <Route path="/poll" element={<Poll />}></Route>
      </Routes>
      <div class="nav">
        <Link to="/"><button><span className="gg-home"></span ></button></Link>
        <Link to="/search"><button><span className="gg-search"></span></button></Link>
        <Link to="/poll"><button><span className="gg-clipboard"></span></button></Link>
      </div>
    </div>
  )
}

export default App
