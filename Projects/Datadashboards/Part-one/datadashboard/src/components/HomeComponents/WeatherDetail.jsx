import { useState } from 'react'
import { useParams } from 'react-router-dom'

export const WeatherDetail = () => {
  const { date } = useParams()
  const { currDate, setCurrDate } = useState(date)
  return (
    <div>
      <h1>currDate</h1>
    </div>
  )
}
