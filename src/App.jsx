import './App.css'
import Home from './components/Home'
import ResidentCard from './components/ResidentCard';
import { HashRouter, Link, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <HashRouter>
        <Link to='/' style={{position:'fixed', top:'10px', left:'50px', fontSize:'2rem', color: 'white'}}>
          <i className="fa-solid fa-house"></i>
        </Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters/:id" element={<ResidentCard />} />
        </Routes>
      </HashRouter>
      {/* <Location/> */}
      <div className='footer'>
        <h2 style={{ fontSize: '3rem' }}>Rick and Morty APP</h2>
      </div>
    </div>
  )
}

export default App
