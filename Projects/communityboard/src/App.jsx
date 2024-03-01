import './App.css'
import { Cards } from './components/CardList'

function App() {
  return (
    <div className='App'>
      <div className="header">
            <img src="https://heroic-pixie-6d7f91.netlify.app/awning.png" />
            <h1>Pet your Favorites</h1>
      </div>
      <Cards />
    </div>
  )
}

export default App
