import Card from './Card'
import { supabase } from '../client'
import { useEffect, useState } from 'react'
import './GremateGallery.css'

const CremateGallery = () => {
  const [crewmates, setCrewmates] = useState(null)

  useEffect(() => {
    const fetchCrewInfo = async () => {
      const { data } = await supabase
        .from('Crew')
        .select('*')
        .order('created_at', { ascending: true })
      setCrewmates(data)
    }
    fetchCrewInfo()
  }, [])
  return (
    <div>
      <h1>Your Crewmate Gallery!</h1>
      <div className="crewmate-container">
        {crewmates ? (
          crewmates.length > 0 &&
          crewmates.map((crewmate, index) => (
            <Card key={index} player={crewmate} />
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}
export default CremateGallery
