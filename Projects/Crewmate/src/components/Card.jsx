import { Link } from 'react-router-dom'
import crewmate from '../assets/crewmate.png'

const Card = ({ player }) => {
  return (
    <div className={'crewmate-card-' + player.typeColor}>
      <img src={crewmate} style={{ height: '150px', width: 'auto' }} />
      <h3>
        Name of Crewmate: <span>{player.name}</span>{' '}
      </h3>
      <h3>
        Type of Crewmate: <span>{player.type}</span>{' '}
      </h3>
      <h3>
        Weapon of Crewmate: <span>{player.weapon}</span>{' '}
      </h3>
      <Link to={`/edit/${player.id}`} state={{ crewData: player }} id="link">
        <button>Edit Crewmate</button>
      </Link>
    </div>
  )
}
export default Card
