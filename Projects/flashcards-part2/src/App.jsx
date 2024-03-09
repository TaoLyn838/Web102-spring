import { machineLearningFlashcards } from './data'
import './App.css'
import { useState } from 'react'
import { useId } from 'react';
import FlippableCard from './components/FlippableCard';

function App() {
  const [flashcards, setFlashcards] = useState(machineLearningFlashcards)
  const [currIndex, setCurrIndex] = useState(0);
  const [answer, setAnswer] = useState('')
  const [currStreak, setcurrStreak] = useState(0)
  const [longestStreak, setLongestStreak] = useState(0)

  const currCard = flashcards[currIndex]
  const inputID = useId()


  const goNextCard = () => {
    setCurrIndex((currIdx) => 
    currIdx % (flashcards.length - 1) + 1)
  }

  const goPerviousCard = () => {
    setCurrIndex((currIdx) => currIdx - 1 <= 0 ? 0 : currIdx - 1)
  }

  const handleChange = (e) => {
    setAnswer(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setcurrStreak((score) => 
    answer.toLowerCase() === currCard.answer.toLowerCase() ? score + 1 : score <= 0 ? 0 : score - 1)

    setLongestStreak((bestScore) => 
    bestScore < currStreak ? currStreak : bestScore)

    setAnswer('')
  }

  const shuffleCards = () => {
    setFlashcards((cards) => fisherYatesSuffle(cards))
  }

  function fisherYatesSuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i + 1)
      const temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
    return arr
  }

  return (
    <div>
      <div className='header-container'>
        <h2>Explore the World of Machine Learning</h2>
        <h4>Unlock the potential of intelligent algorithms and data-driven 
          insights.</h4>
        <h5>Number of cards: {flashcards.length - 1}</h5>
        <div>
          <h5>
            {`Current Streak: ${currStreak}, Longest Streak: ${longestStreak}`}
          </h5>
        </div>
      </div>
      <br />
      <FlippableCard card={currCard} />
      <form className='guessing' onSubmit={handleSubmit}>
        Guess the answer here:
        <input 
        id={inputID} 
        type='text' 
        name={`question ${currIndex}`}
        value={answer}
        onChange={handleChange}
        placeholder='Place your answer here...'/>
        <button type='submit' className='submit-button'>Submit Guess</button>
      </form>
      <br />
      <div>
      <button type='back' className='perviousCard' onClick={goPerviousCard} 
      disabled={currIndex === 0}>{`<-`}</button>
      <button type='next' className='nextCard' onClick={goNextCard}>
          {`->`}
      </button>
      <button type='shuffle' className='shuffle-button' onClick={shuffleCards}>
        Shuffle cards
      </button>
    </div>
    </div>
  )
}

export default App
