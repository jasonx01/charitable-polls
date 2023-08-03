import { useState } from 'react'
import Home from './pages/HomePage.jsx'
import Charity from './pages/CharityPage.jsx'
import Search from './pages/SearchPage.jsx'
import Poll from './pages/QuestionPage.jsx'
import './global.css'
import { Route, Routes, Link } from 'react-router-dom'
import Iguana from './images/iguana.png'

function App() {
  return (
    <div className='phone-screen'> 
     {/* {<ul> 
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/charity">Charity</Link></li>
        <li><Link to="/poll">Poll</Link></li>
    </ul>} */}
      <Routes>
        <Route path="/" element={<Home iguanaImage={Iguana}/>}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/charity" element={<Charity />}></Route>
        <Route path="/poll" element={<Poll />}></Route>
      </Routes>
    </div>
  )
}

export default App
