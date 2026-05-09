import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Logement from './pages/Logement'
import { Routes, Route } from 'react-router-dom'
import './App.css'
function App() {

  return (
    <div  className='App'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
      </Routes>
    </div>

  )
}
export default App
