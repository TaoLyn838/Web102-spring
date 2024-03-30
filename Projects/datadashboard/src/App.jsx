import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './components/Home'
import { Search } from './components/Search'
import { About } from './components/About'
import { NoPage } from './components/NoPage'
import { Nav } from './components/Nav'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  )
}

export default App
