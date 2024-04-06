import { useEffect, useState } from 'react'
import axios from 'axios'
import weather from '../data.json'
import { WeatherCards } from './HomeComponents/WeatherCards'
import { WeatherCharts } from './HomeComponents/WeatherCharts'
import './Home.css'
import { WeatherTable } from './HomeComponents/WeatherTable'

const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY

export const Home = () => {
  // const [weather, setWeather] = useState({ data: [] })

  const makeFullURL = () => {
    let start_url = 'https://api.weatherbit.io/v2.0'
    let resourceType = 'forecast/daily'
    let city = 'Boston,US'
    return `${start_url}/${resourceType}?city=${city}&key=${ACCESS_KEY}`
  }
  const moonPhases = {
    'New Moon (precise)': { range: [0, 0.02], emoji: '🌑' },
    'Waxing Crescent': { range: [0.02, 0.25], emoji: '🌒' },
    'First Quarter': { range: [0.25, 0.26], emoji: '🌓' },
    'Waxing Gibbous': { range: [0.26, 0.49], emoji: '🌔' },
    'Full Moon': { range: [0.49, 0.51], emoji: '🌕' },
    'Waning Gibbous': { range: [0.51, 0.74], emoji: '🌖' },
    'Last Quarter': { range: [0.74, 0.75], emoji: '🌗' },
    'Waning Crescent': { range: [0.75, 0.98], emoji: '🌘' },
    'New Moon (exact)': { range: [0.98, 1], emoji: '🌑' },
  }

  const getMoonEmoji = (moon_phase) => {
    for (const {
      range: [min, max],
      emoji,
    } of Object.values(moonPhases)) {
      if (moon_phase >= min && moon_phase < max) {
        return emoji
      }
    }
    return '❓'
  }

  // useEffect(() => {
  //   const callAPI = async () => {
  //     const response = await axios.get(makeFullURL())
  //     const weatherData = response.data
  //     setWeather(weatherData)
  //   }
  //   callAPI().catch(console.error)
  // }, [])

  const celsiusToFahrenheit = (celsius) => Math.round((celsius * 9) / 5 + 32)

  function formatDate(inputDate) {
    const dateObj = new Date(inputDate)

    const month = String(dateObj.getMonth() + 1).padStart(2, '0')
    const day = String(dateObj.getDate()).padStart(2, '0')
    const year = dateObj.getFullYear()

    return `${month}/${day}/${year}`
  }
  return (
    <div className="home-page">
      <div className="App-row">
        <WeatherCards weather={weather} getMoonEmoji={getMoonEmoji} />
      </div>
      <WeatherCharts
        weatherData={weather.data}
        celsiusToFahrenheit={celsiusToFahrenheit}
        formatDate={formatDate}
      />
      <WeatherTable
        weather={weather}
        moonPhases={moonPhases}
        moonPhaseEmoji={getMoonEmoji}
        celsiusToFahrenheit={celsiusToFahrenheit}
        formatDate={formatDate}
      />
    </div>
  )
}
