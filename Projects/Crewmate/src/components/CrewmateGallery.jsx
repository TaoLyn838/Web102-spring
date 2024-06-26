import { supabase } from '../client'
import { useEffect, useState } from 'react'
import './CrewmateGallery.css'
import { CrewmateCard } from './CrewmateCard'

const CrewmateGallery = () => {
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
    <div className="gallery-page">
      <div className="grid grid-cols-1 gap-10">
        <h1 className="title">Your Crewmate Gallery!</h1>
        <div className="crewmate-container">
          {crewmates ? (
            crewmates.length > 0 &&
            crewmates.map((crewmate, index) => (
              <CrewmateCard key={index} crewmate={crewmate} />
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  )
}
export default CrewmateGallery
