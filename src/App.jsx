import './App.css'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/home'
import Academy from './pages/academy'
import Leagues from './pages/leagues'
import Fitness from './pages/fitness'
import Events from './pages/events'
import YouthLeagues from './pages/youthLeagues'
import TeamBookings from './pages/teamBookings'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/academy' element={<Academy />} />
        <Route path='/youth-leagues' element={<YouthLeagues />} />
        <Route path='/adult-leagues' element={<Leagues />} />
        <Route path='/fitness' element={<Fitness />} />
        <Route path='/events' element={<Events />} />
        <Route path='/team-bookings' element={<TeamBookings />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
