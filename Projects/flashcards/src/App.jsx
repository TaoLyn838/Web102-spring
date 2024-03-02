import { machineLearningFlashcards } from './data'
import './App.css'
import { useState } from 'react'
import FlippableCard from './components/FlippableCard';

function App() {
  const [currIndex, setCurrIndex] = useState(0);
  const currCard = machineLearningFlashcards[currIndex]

  const goNextCard = () => {
    setCurrIndex((prevIndex) => 
    prevIndex % (machineLearningFlashcards.length - 1) + 1)
  }

  return (
    <div>
    <div className='header-container'>
      <h2>Explore the World of Machine Learning</h2>
      <h4>Unlock the potential of intelligent algorithms and data-driven 
        insights.</h4>
      <h5>Number of cards: {machineLearningFlashcards.length - 1}</h5>
    </div>
    <br />
    <FlippableCard card={currCard} />
    <br />
    <button type='button' className='nextCard' onClick={goNextCard}>
      {`->`}
    </button>
    </div>
  )
}

export default App
