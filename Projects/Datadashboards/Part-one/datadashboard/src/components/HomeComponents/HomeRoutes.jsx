import { Route, Routes } from 'react-router-dom'
import { WeatherDetail } from './WeatherDetail'

export const HomeRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/weatherDetail/:id" element={<WeatherDetail />} />
      </Routes>
    </div>
  )
}
