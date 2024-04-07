import { Link } from 'react-router-dom'
import crewImg from '../assets/crewmate.png'

export const CrewmateCard = ({ crewmate }) => {
  return (
    <div className="crew-card-container">
      <div className={`crew-card-` + crewmate.typeColor}>
        <img
          className="w-full h-auto rounded-t-xl"
          src={crewImg}
          alt="Image Description"
        />
        <div className="p-4 md:p-5">
          <h3 className="crew-card-h3">{crewmate.name}</h3>
          <h3 className="crew-card-h3">{crewmate.type}</h3>
          <h3 className="crew-card-h3">{crewmate.weapon}</h3>

          <Link
            className="crew-card-btn"
            to={`/edit/${crewmate.id}`}
            state={{ crewData: crewmate }}
            id="link"
          >
            Edit Crewmate
          </Link>
        </div>
      </div>
    </div>
  )
}
