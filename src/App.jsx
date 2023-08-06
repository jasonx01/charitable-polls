import { useState } from 'react'
import Home from './pages/HomePage.jsx'
import Charity from './pages/CharityPage.jsx'
import Search from './pages/SearchPage.jsx'
import Poll from './pages/QuestionPage.jsx'
import Raffle from './pages/RafflePage.jsx'
import './global.css'
import './pages/navbar.css'
import './pages/Icons.css'

import { Route, Routes, Link } from 'react-router-dom'
import Iguana from './images/iguana.png'
import STC from './images/forthekids.png'

/*
  ./images/iguana.png, picture taken by Andrew Kathriner
*/
function App() {
  return (
    <div className='phone-screen'>
      <Routes>
        <Route path="/" element={<Home iguanaImage={Iguana} STCImg={STC} />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/poll" element={<Poll />}></Route>
        <Route path="/charitypage" element={<Charity iguanaImage={Iguana} />}></Route>
        <Route path="/raffle" element={<Raffle />}></Route>
      </Routes>
      <div class="nav">
        <Link to="/"><button className='navbutton'><span className="gg-home"></span ></button></Link>
        <Link to="/search"><button className='navbutton'><span className="gg-search"></span></button></Link>
        <Link to="/poll"><button className='navbutton'><span className="gg-clipboard"></span></button></Link>
        <Link to="/raffle"><button className='navbutton'><span className="gg-smile"></span></button></Link>
      </div>
    </div>
  )
}

export default App
