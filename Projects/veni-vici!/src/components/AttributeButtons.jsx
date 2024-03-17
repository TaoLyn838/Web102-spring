import React from 'react'

const AttributeButtons = ({ attributeBtn, addAttributeToBanList }) => {
  const TemperamentButtons = ({ temperaments, addAttributeToBanList }) => {
    return temperaments.map((temperament, index) => (
      <button
        key={index}
        className="attribute-buttons"
        type="attribute"
        name="temperaments"
        value={temperament}
        onClick={(e) => addAttributeToBanList(e.target.name, e.target.value)}
      >
        {temperament}
      </button>
    ))
  }
  const OtherAttributes = ({ attributeBtn, addAttributeToBanList }) => {
    return Object.entries(attributeBtn).map(([key, value]) => (
      <button
        key={key}
        className="attribute-buttons"
        type="attribute"
        value={value}
        onClick={() => addAttributeToBanList(key, value)}
      >
        {key === 'life_span'
          ? `${value} years`
          : key === 'imperial'
          ? `${value} lbs`
          : key === 'metric'
          ? `${value} kg`
          : value}
      </button>
    ))
  }
  return (
    <div className="buttons">
      {Object.entries(attributeBtn).map(([key, value]) => {
        return key === 'temperaments' && value.length !== 0 ? (
          <TemperamentButtons
            key={key}
            temperaments={value}
            addAttributeToBanList={addAttributeToBanList}
          />
        ) : (
          <OtherAttributes
            key={key}
            attributeBtn={{ [key]: value }}
            addAttributeToBanList={addAttributeToBanList}
          />
        )
      })}
    </div>
  )
}

export default AttributeButtons
