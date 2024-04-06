import { useLocation } from 'react-router-dom'
import EditComponents from './EditComponents'

const EditCrewmate = () => {
  const player = useLocation().state.crewData
  return (
    <div className="update">
      <h1>{`Update Your Crewmate :)`}</h1>
      <img
        src="https://shimmering-stardust-c75334.netlify.app/assets/crewmates.43d07b24.png"
        alt="crewmate"
        width={500}
      />

      <h1>Current Crewmate Info:</h1>
      <h2>
        Name: {player.name}, Type: {player.type}, Weapon: {player.weapon}
      </h2>
      <EditComponents id={player.id} />
    </div>
  )
}
export default EditCrewmate
