import React, { useState } from 'react'

const HistorySidebar = ({ discoverHistory }) => {
  const [showDescription, setShowDescription] = useState(null)

  return (
    <div className="history-sidebar">
      <h2>Who have we seen so far?</h2>
      <div className="history-container">
        <ul>
          {discoverHistory.length !== 0 &&
            discoverHistory.map((cat) => (
              <li key={cat.id}>
                <img
                  src={cat.img_url}
                  style={{ width: `75px`, height: `75px` }}
                  onMouseEnter={() => setShowDescription(cat.id)}
                  onMouseLeave={() => setShowDescription(null)}
                />
                {showDescription === cat.id && (
                  <p className="cat-description">{cat.description}</p>
                )}
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default HistorySidebar
