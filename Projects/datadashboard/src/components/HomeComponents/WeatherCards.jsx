export const WeatherCards = ({ weather, getMoonEmoji }) => {
  // nested card component
  const Card = ({ number, description }) => {
    return (
      <div className="Card">
        <h1 className="number">{number}</h1>
        <h2>{description}</h2>
      </div>
    )
  }

  const moonRise = (moonrise_ts) => {
    const moonriseDate = new Date(moonrise_ts * 1000)
    const hours = String(moonriseDate.getHours()).padStart(2, '0')
    const minutes = String(moonriseDate.getMinutes()).padStart(2, '0')
    const seconds = String(moonriseDate.getSeconds()).padStart(2, '0')

    return `${hours}:${minutes}:${seconds}`
  }

  return (
    <div className="weather-card-container">
      <Card number={weather.city_name} description={weather.country_code} />
      <Card
        number={moonRise(weather.data[0]?.moonrise_ts)}
        description={'Moon Rise'}
      />
      <Card
        number={getMoonEmoji(weather.data[0]?.moon_phase)}
        description="Moon phase"
      />
    </div>
  )
}
