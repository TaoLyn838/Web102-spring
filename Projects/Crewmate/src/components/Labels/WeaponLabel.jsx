export const WeaponLabel = ({ userWeapon, weaponTypes, handleChange }) => {
  return (
    <div>
      <label className="label-title">
        <h3>Weapon</h3>
      </label>
      <select
        className="weapon-label-select"
        name="weapon"
        value={userWeapon}
        onChange={handleChange}
      >
        {weaponTypes.map((weapon, index) => (
          <option key={index} value={weapon}>
            {weapon}
          </option>
        ))}
      </select>
    </div>
  )
}
