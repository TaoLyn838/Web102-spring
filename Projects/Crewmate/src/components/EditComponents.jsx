import { supabase } from '../client'
import { useState } from 'react'

const EditComponents = ({ id }) => {
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

  const handleChange = (e) => {
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

  const updateCrewmate = async () => {
    // Check if name, weapon, or type is an empty string or null
    if (!crewmate.name || !crewmate.weapon || !crewmate.type) {
      alert('Name, weapon, and type fields cannot be empty.')
      return // Stop the function if validation fails
    }

    // Proceed with the insert if validation is successful
    const { data, error } = await supabase
      .from('Crew')
      .update([
        {
          name: crewmate.name,
          weapon: crewmate.weapon,
          type: crewmate.type,
          typeColor: crewmate.typeColor,
        },
      ])
      .eq('id', id)

    if (error) {
      console.error('Error inserting data: ', error)
      alert('There was an error inserting the data. Please try again.') // Alert the user
    } else {
      console.log('Inserted data: ', data)
      window.location = '/crewmateGallery' // Assuming '/gremateGallery' was a typo
    }
  }

  const deleteCrewmate = async () => {
    const { error } = await supabase.from('Crew').delete().eq('id', id)
    if (error) {
      console.error('Error deleting crewmate:', error)
      alert('Failed to delete the crewmate. Please try again.')
    } else {
      alert('Crewmate has been successfully deleted!')
      window.location = '/crewmateGallery' // Assuming '/gremateGallery' was a typo
    }
  }

  return (
    <div>
      <form className="form-container">
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
      </form>
      <div>
        <button onClick={updateCrewmate}>Update Crewmate</button>
        &nbsp; &nbsp;
        <button onClick={deleteCrewmate}>Delete Crewmate</button>
      </div>
    </div>
  )
}
export default EditComponents
