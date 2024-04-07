import './CreateMate.css'
import { useState } from 'react'
import { supabase } from '../client'
import { NameLabel } from './Labels/NameLabel'
import { WeaponLabel } from './Labels/WeaponLabel'
import { WeaponTypeLabel } from './Labels/WeaponTypeLabel'

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
      newCrewmate.typeColor = types[value]
    }
    setCrewmate(newCrewmate)
  }

  return (
    <div className="create-crewmate-page">
      <h1>Create a New Crewmate</h1>
      <img
        src="https://shimmering-stardust-c75334.netlify.app/assets/crewmates.43d07b24.png"
        style={{ width: 'auto', height: '100px' }}
      />
      <form className="form-container">
        <NameLabel username={crewmate.name} handleChange={handleChange} />
        <WeaponLabel
          userWeapon={crewmate.weapon}
          weaponTypes={weaponTypes}
          handleChange={handleChange}
        />
        <WeaponTypeLabel
          types={types}
          userType={crewmate.type}
          handleChange={handleChange}
        />
      </form>
      <button type="submit" onClick={createCrewmate}>
        Create crewmate!
      </button>
    </div>
  )
}
export default CreateMate
