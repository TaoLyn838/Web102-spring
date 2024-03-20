import React from 'react'
import { SideNavButtons } from './SideNavButtons'

const SideNav = ({ banList, removeAttributeToBanList }) => {
  return (
    <div className="sideNav">
      <h2>Ban List</h2>
      <h4>Select an attribute in your listing to ban it</h4>
      <div>
        {Object.entries(banList).map(([key, value]) => (
          <SideNavButtons
            key={key}
            name={key}
            attribute={value}
            handleOnClick={(e) => removeAttributeToBanList(e)}
          />
        ))}
      </div>
    </div>
  )
}

export default SideNav
