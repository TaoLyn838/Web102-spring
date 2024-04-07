export const WeaponTypeLabel = ({ types, userType, handleChange }) => {
  return (
    <div className="mini-container">
      <label>
        <h3>Choose a type:</h3>
      </label>
      <ul className="character-type">
        {Object.keys(types).map((type) => (
          <li key={type}>
            <label className={`type-` + types[type]}>
              <input
                type="radio"
                name="type"
                value={type}
                checked={userType === type}
                onChange={handleChange}
              />
              {type}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}
