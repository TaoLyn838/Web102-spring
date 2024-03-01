import { cardList } from "../petdata"
import '../App.css'

export const Cards = () => {
  return (
        <div className="card-container" >
            {
              cardList.map((pet) => (
                <div className="card" key={pet.id}>
                  <img src={pet.image} alt={pet.alt}/>
                  <h3>{pet.name}</h3>
                  <a href={pet.link}>
                    <button>More</button>
                  </a>
                </div>
              ))
            }
        </div>
  )
}