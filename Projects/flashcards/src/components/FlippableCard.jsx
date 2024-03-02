import { useState } from "react"
import './FlippableCard.css'

const FlippableCard = ({card}) => {
  const [isfront, setIsFront] = useState(true)

  const didFlipTapped = () => {
    setIsFront((show) => !show)
  }
  
  return (
    <div className="card-container">
        <div className={isfront ? `card ${card.difficulty}` : 
        `card flipped ${card.difficulty}`} id={card.id} onClick={didFlipTapped}>
          {
            isfront ? 
            <div className="front" >
              {card.question}
              <br />
              {
              card.image != null ?
               <img src={card.image} />
               :
               <></>
              }
            </div>
            :
            <div className="back" >
              {card.answer}
              <br />
            </div>
          }
        </div>
    </div>
  )
}

export default FlippableCard