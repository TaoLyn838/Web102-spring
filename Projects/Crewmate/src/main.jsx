import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Routes/Layout.jsx'
import CreateMate from './components/CreateMate.jsx'
import CremateGallery from './components/CremateGallery.jsx'
import EditCrewmate from './components/EditCrewmate.jsx'
import { BrowserRouter as Router } from 'react-router-dom'

const container = document.getElementById('root')
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="createMate" element={<CreateMate />} />
          <Route path="crewmateGallery" element={<CremateGallery />} />
          <Route path="edit/:id" element={<EditCrewmate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
