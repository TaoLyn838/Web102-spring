import './App.css'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import CreateMate from './components/CreateMate.jsx'
import CrewmateGallery from './components/CrewmateGallery.jsx'
import EditCrewmate from './components/EditCrewmate.jsx'
import NavBar from './components/NavBar.jsx'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/">
          <Route index={true} element={<Home />} />
          <Route path="createMate" element={<CreateMate />} />
          <Route path="crewmateGallery" element={<CrewmateGallery />} />
          <Route path="edit/:id" element={<EditCrewmate />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
