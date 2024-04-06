import { useState, useEffect } from 'react'

export const WeatherIcon = ({ iconCode }) => {
  const [Icon, setIcon] = useState(null)

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
