import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Academy from './pages/academy'
import Leagues from './pages/leagues'
import Fitness from './pages/fitness'
import Events from './pages/events'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/academy' element={<Academy />} />
        <Route path='/adult-leagues' element={<Leagues />} />
        <Route path='/fitness' element={<Fitness />} />
        <Route path='/events' element={<Events />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
