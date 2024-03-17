import React, { useState } from 'react'
import AttributeButtons from './AttributeButtons'

const DiscoverContainer = ({ cat, attributeBtn, addAttributeToBanList }) => {
  const [rotation, setRotationState] = useState({
    rotateX: 0,
    rotateY: 0,
  })

  function mouseListener(e) {
    const rect = e.target.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const rotateX = ((mouseY - height / 2) / height) * -20
    const rotateY = ((mouseX - width / 2) / width) * 20

    setRotationState({
      rotateX: rotateX,
      rotateY: rotateY,
    })
  }

  return (
    <div className="discover-container">
      {cat.id === '' ? (
        <div className="start-discover">
          <h2>👇 Click on Discover to Get Started! </h2>
        </div>
      ) : (
        <div className="listing-container">
          <h2>{cat.name}</h2>
          <AttributeButtons
            attributeBtn={attributeBtn}
            addAttributeToBanList={addAttributeToBanList}
          />
          <br />
          <div
            className="cat-img-container"
            key={cat.id}
            onMouseMove={mouseListener}
            onMouseLeave={() =>
              setRotationState({
                rotateX: 0,
                rotateY: 0,
              })
            }
            style={{
              transform: `perspective(750px) scale(1) 
                rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg)`,
            }}
          >
            <a href={cat.wikipedia_url}>
              <img className="cat-pic" src={cat.img_url} alt="Cat" />
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default DiscoverContainer
