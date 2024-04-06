import React, { useState } from 'react'
import { WeatherSearchBar } from './WeatherSearchBar'
import { Link } from 'react-router-dom'
import { WeatherIcon } from './WeathIcon'

export const WeatherTable = ({
  weather,
  moonPhases,
  moonPhaseEmoji,
  celsiusToFahrenheit,
  formatDate,
}) => {
  const [filteredData, setFilteredData] = useState(weather.data)

  const WeatherList = () => {
    return (
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              {filteredData && filteredData.length > 0 ? (
                <table className="weather-table">
                  <thead>
                    <tr>
                      <th className="weather-list-th">Date</th>
                      <th className="weather-list-th">Temperature</th>
                      <th className="weather-list-th">Weather</th>
                      <th className="weather-list-th">Phase</th>
                      <th>Details</th>
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
                            <Link
                              className="weather-link"
                              to={`/weatherDetail/${datetime}`}
                              state={{ weather: item }}
                            >
                              📑
                            </Link>
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
