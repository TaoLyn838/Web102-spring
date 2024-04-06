import React, { useState, useEffect } from 'react'
import { WeatherSearchBar } from './WeatherSearchBar'

export const WeatherTable = ({
  weather,
  moonPhases,
  moonPhaseEmoji,
  celsiusToFahrenheit,
  formatDate,
}) => {
  const [filteredData, setFilteredData] = useState(weather.data)
  const [Icon, setIcon] = useState(null)

  const WeatherIcon = ({ iconCode }) => {
    useEffect(() => {
      import(`../../assets/icons/${iconCode}.png`)
        .then((icon) => {
          setIcon(icon.default)
        })
        .catch((error) => {
          console.error('Failed to load the icon:', error)
        })
    }, [iconCode])

    return Icon ? (
      <img
        src={Icon}
        alt={`Weather icon for ${iconCode}`}
        style={{ width: '70px', height: '70px' }}
      />
    ) : null
  }

  const WeatherList = () => {
    return (
      <div class="flex flex-col">
        <div class="-m-1.5 overflow-x-auto">
          <div class="p-1.5 min-w-full inline-block align-middle">
            <div class="overflow-hidden">
              {filteredData && filteredData.length > 0 ? (
                <table className="weather-table">
                  <thead>
                    <tr>
                      <th className="weather-list-th">Date</th>
                      <th className="weather-list-th">Temperature</th>
                      <th className="weather-list-th">Weather</th>
                      <th className="weather-list-th">Phase</th>
                      {/* <th>Details</th> */}
                    </tr>
                  </thead>
                  {filteredData.map((item) => {
                    const { datetime, temp, weather, moon_phase } = item
                    return (
                      <tbody key={datetime}>
                        <tr>
                          <td className="weather-list-td">
                            {formatDate(datetime)}
                          </td>
                          <td className="weather-list-td">{`${celsiusToFahrenheit(
                            temp
                          )} °F`}</td>
                          <td className="weather-list-td">
                            <WeatherIcon iconCode={weather.icon} />
                          </td>
                          <td className="weather-list-td">
                            {moonPhaseEmoji(moon_phase)}
                          </td>
                          <td>
                            {/* <Link
                        className="weather-link"
                        to={`/weatherInfo/${datetime}`}
                        state={{ weather: item }}
                      >
                        📑
                      </Link> */}
                          </td>
                        </tr>
                      </tbody>
                    )
                  })}
                </table>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="weather-table-container">
      <WeatherSearchBar
        weather={weather}
        moonPhases={moonPhases}
        setFilteredData={setFilteredData}
      />
      <WeatherList />
    </div>
  )
}
