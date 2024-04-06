import './CreateMate.css'
import { useState } from 'react'
import { supabase } from '../client'

const CreateMate = () => {
  const weaponTypes = [
    'Pistols',
    'Katanas',
    'Cannons',
    'Crosses',
    'Greatswords',
    'Gauntlets',
    'Scythes',
    'Lances',
    'Bows',
    'Chakrams',
    'Javelins',
  ]

  const types = {
    Psychic: 'pink',
    Mecha: 'blue',
    Biologic: 'yellow',
    Quantum: 'purple',
    Imaginary: 'light-yellow',
  }

  const [crewmate, setCrewmate] = useState({
    name: '',
    weapon: 'Pistols',
    type: '',
    typeColor: '',
  })

  const createCrewmate = async (event) => {
    event.preventDefault()

    // Check if name, weapon, or type is an empty string or null
    if (!crewmate.name || !crewmate.weapon || !crewmate.type) {
      alert('Name, weapon, and type fields cannot be empty.')
      return // Stop the function if validation fails
    }

    // Proceed with the insert if validation is successful
    const { data, error } = await supabase.from('Crew').insert([
      {
        name: crewmate.name,
        weapon: crewmate.weapon,
        type: crewmate.type,
        typeColor: crewmate.typeColor,
      },
    ])

    if (error) {
      console.error('Error inserting data: ', error)
      alert('There was an error inserting the data. Please try again.')
    } else {
      console.log('Inserted data: ', data)
      window.location = '/crewmateGallery'
    }
  }

  function handleChange(e) {
    const { name, value } = e.target
    let newCrewmate = {
      ...crewmate,
      [name]: value,
    }
    if (name === 'type') {
      newCrewmate.typeColor = types[value] // Use the `types` object to set the color
    }
    setCrewmate(newCrewmate)
  }

  const NameLabel = () => {
    return (
      <div className="mini-container">
        <label>
          <h3>Name:</h3>
        </label>
        <input
          type="text"
          name="name"
          value={crewmate.name}
          placeholder="Enter your name"
          onChange={handleChange}
        />
      </div>
    )
  }

  const WeaponLabel = () => {
    return (
      <div className="mini-container">
        <label>
          <h3>Weapon</h3>
        </label>
        <select name="weapon" value={crewmate.weapon} onChange={handleChange}>
          {weaponTypes.map((weapon, index) => (
            <option key={index} value={weapon}>
              {weapon}
            </option>
          ))}
        </select>
      </div>
    )
  }

  const WeaponTypeLabel = () => {
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
                  checked={crewmate.type === type}
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

  return (
    <div>
      <h1>Create a New Crewmate</h1>
      <img
        src="https://shimmering-stardust-c75334.netlify.app/assets/crewmates.43d07b24.png"
        style={{ width: 'auto', height: '100px' }}
      />
      <form className="form-container">
        <NameLabel />
        <WeaponLabel />
        <WeaponTypeLabel />
      </form>
      <button type="submit" onClick={createCrewmate}>
        Create crewmate!
      </button>
    </div>
  )
}
export default CreateMate
