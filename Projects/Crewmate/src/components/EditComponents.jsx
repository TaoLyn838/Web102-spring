import { supabase } from '../client'
import { useState } from 'react'
import { NameLabel } from './Labels/NameLabel'
import { WeaponLabel } from './Labels/WeaponLabel'
import { WeaponTypeLabel } from './Labels/WeaponTypeLabel'

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
    Imaginary: 'lightYellow',
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
      newCrewmate.typeColor = types[value]
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
      window.location = '/crewmateGallery'
    }
  }

  return (
    <div>
      <form className="form-container gap-4">
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
      <br />
      <div className="grid grid-cols-5 gap-2">
        <button
          className="crewmate-btn col-start-2 col-end-5"
          onClick={updateCrewmate}
        >
          Update Crewmate
        </button>
        <button
          className="crewmate-btn col-start-2 col-end-5"
          onClick={deleteCrewmate}
        >
          Delete Crewmate
        </button>
      </div>
    </div>
  )
}
export default EditComponents
