import { useLocation } from 'react-router-dom'
import EditComponents from './EditComponents'

const EditCrewmate = () => {
  const player = useLocation().state.crewData
  return (
    <>
      <div className="grid grid-cols-1 gap-3">
        <h1 className="title">{`Update Your Crewmate :)`}</h1>
        <img
          src="https://shimmering-stardust-c75334.netlify.app/assets/crewmates.43d07b24.png"
          alt="crewmate"
        />
        <h2 className="sub-title">Current Crewmate Info:</h2>
        <h2>
          <em>
            Name: {player.name}, Type: {player.type}, Weapon: {player.weapon}
          </em>
        </h2>
        <EditComponents id={player.id} />
      </div>
    </>
  )
}
export default EditCrewmate
