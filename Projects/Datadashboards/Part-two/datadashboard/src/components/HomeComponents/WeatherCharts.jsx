import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  LineChart,
  Line,
} from 'recharts'

export const WeatherCharts = ({
  weatherData,
  celsiusToFahrenheit,
  formatDate,
}) => {
  const WeatherAreaChart = () => {
    const filteredData = () => {
      return weatherData.map((data) => ({
        'Temp (°F)': celsiusToFahrenheit(data.temp),
        datetime: formatDate(data.datetime),
      }))
    }
    return (
      <div className="area-chart">
        <AreaChart
          width={480}
          height={300}
          data={filteredData()}
          margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 30,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="datetime" tick={{ fill: 'white' }}></XAxis>
          <YAxis
            label={{
              value: 'Temperature (°F)',
              angle: -90,
              position: 'insideLeft',
              dy: 40, // Adjust this value to move the label up or down
              offset: 10, // Distance between the label and the axis
              textAnchor: 'middle',
              fill: 'white',
            }}
            tick={{ fill: 'white' }}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Temp (°F)"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </div>
    )
  }
  const WeatherLineChart = () => {
    const filteredData = () => {
      return weatherData.map((data) => ({
        'Wind gust speed': data.wind_gust_spd,
        'Wind speed': data.wind_spd,
        datetime: formatDate(data.datetime),
      }))
    }
    return (
      <div className="line-chart">
        <LineChart
          width={480}
          height={300}
          data={filteredData()}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="datetime" tick={{ fill: 'white' }}></XAxis>
          <YAxis
            label={{
              value: 'Wind speed (m/s)',
              angle: -90,
              position: 'insideLeft',
              dy: 40, // Adjust this value to move the label up or down
              offset: 10, // Distance between the label and the axis
              textAnchor: 'middle',
              fill: 'white',
            }}
            tick={{ fill: 'white' }}
          />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Wind gust speed"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="Wind speed" stroke="#82ca9d" />
        </LineChart>
      </div>
    )
  }
  return (
    <div className="chart-container">
      <WeatherAreaChart />
      <WeatherLineChart />
    </div>
  )
}
