import { useParams, useLocation, useNavigate } from 'react-router-dom'

import { WeatherIcon } from './WeathIcon'
import '../Home.css'

export const WeatherDetail = () => {
  const { id: currDate } = useParams()
  const location = useLocation()
  const weatherData = location.state?.weather
  const navigate = useNavigate()

  const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32
  }

  const DetailTable = () => {
    return (
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="border rounded-lg shadow overflow-hidden dark:border-gray-700 dark:shadow-gray-900">
              <table className="weather-table">
                <thead>
                  <tr className="divide-x divide-gray-200 dark:divide-gray-700">
                    <th className="weather-list-th">Name</th>
                    <th className="weather-list-th">info</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="weather-detail-name-td">Min Temperature</td>
                    <td className="weather-list-td">
                      {`${celsiusToFahrenheit(weatherData.min_temp)} °F`}
                    </td>
                  </tr>
                  <tr>
                    <td className="weather-detail-name-td">Max temperature</td>
                    <td className="weather-list-td">
                      {`${celsiusToFahrenheit(weatherData.max_temp)} °F`}
                    </td>
                  </tr>
                  <tr>
                    <td className="weather-detail-name-td">Wind speed</td>
                    <td className="weather-list-td">
                      {`${weatherData.wind_spd} m/s`}
                    </td>
                  </tr>
                  <tr>
                    <td className="weather-detail-name-td">Clouds</td>
                    <td className="weather-list-td">{weatherData.clouds} %</td>
                  </tr>
                  <tr>
                    <td className="weather-detail-name-td">High Clouds</td>
                    <td className="weather-list-td">
                      {weatherData.clouds_hi} %
                    </td>
                  </tr>
                  <tr>
                    <td className="weather-detail-name-td">Low Clouds</td>
                    <td className="weather-list-td">
                      {weatherData.clouds_low} %
                    </td>
                  </tr>
                  <tr>
                    <td className="weather-detail-name-td">Mid Clouds</td>
                    <td className="weather-list-td">
                      {weatherData.clouds_mid} %
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="weather-detail">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-start-1 col-end-4 ">
          <h1 className="text-4xl font-bold dark:text-white">{currDate}</h1>
        </div>
        <div className="col-start-1 col-end-4 ">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <WeatherIcon iconCode={weatherData.weather.icon} />
            <div className="text-2xl font-bold dark:text-white">
              {weatherData.weather.description}
            </div>
          </div>
        </div>
        <div className="col-start-1 col-end-4">
          <DetailTable />
        </div>
        <div className="col-start-1 col-end-4 ">
          <button className="weather-detail-btn" onClick={() => navigate('/')}>
            Back
          </button>
        </div>
      </div>
    </div>
  )
}
