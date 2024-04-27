import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout'
import Pages from './components/pages/index'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Pages.Home />} />
          <Route path="/post/create" element={<Pages.CreatePost />} />
          <Route path="/post/:id" element={<Pages.Post />} />
          <Route path="/post/:id/edit" element={<Pages.EditPost />} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
