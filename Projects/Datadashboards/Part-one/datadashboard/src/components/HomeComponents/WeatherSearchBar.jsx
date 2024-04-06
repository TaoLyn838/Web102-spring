import { useState } from 'react'

export const WeatherSearchBar = ({ weather, setFilteredData, moonPhases }) => {
  const [date, setDate] = useState('')
  const [selectedPhase, setSelectedPhase] = useState('Any')
  const PhasePicker = () => {
    return (
      <select
        className="PhasePicker"
        name="moonPhase"
        id="moonPhase"
        value={selectedPhase}
        onChange={(e) => setSelectedPhase(e.target.value)}
      >
        <option value="Any">Choose a moon phase (All)</option>
        {Object.keys(moonPhases).map((phase) => (
          <option key={phase} value={phase}>
            {moonPhases[phase].emoji} {phase}
          </option>
        ))}
      </select>
    )
  }
  function handleSearch() {
    const dateMatch =
      date === ''
        ? weather.data
        : weather.data.filter((item) => item.datetime === date)

    const moonPhaseMatch =
      selectedPhase === 'Any'
        ? dateMatch
        : dateMatch.filter(
            (item) =>
              item.moon_phase >= moonPhases[selectedPhase].range[0] &&
              item.moon_phase <= moonPhases[selectedPhase].range[1]
          )

    setFilteredData(moonPhaseMatch)
  }
  return (
    <label className="w-search-bar-container" htmlFor="weather-search">
      <div className="flex rounded-lg shadow-sm">
        <button className="search-btn" type="submit" onClick={handleSearch}>
          <svg
            className="flex-shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </button>
        <input
          className="date-filter"
          id="weather-search"
          name="weather-search"
          type="text"
          placeholder="yyyy-mm-dd"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <PhasePicker />
    </label>
  )
}
