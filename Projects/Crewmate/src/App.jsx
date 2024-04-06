import './App.css'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import CreateMate from './components/CreateMate.jsx'
import CremateGallery from './components/CremateGallery.jsx'
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
          <Route path="crewmateGallery" element={<CremateGallery />} />
          <Route path="edit/:id" element={<EditCrewmate />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
